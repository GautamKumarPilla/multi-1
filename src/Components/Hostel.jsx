import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hostel.css';

const Hostel = () => {
  const [data, setData] = useState([]);
  var navigate = useNavigate();
  // useEffect(()=>{
  //    axios.get('http://localhost:4000/Beds').then((response)=>{
  //      console.log(response.data)
  //    })
  // },[data])
  const searchHandler=()=>{
    console.log(data);
    setData('');
  }
  
  return (
    <div className="bg-hostel">
        <div className="w-75 mx-auto">
    <div>
    <div className='d-flex w-75 mx-auto me-0 my-2'>     
       <img src="https://img.freepik.com/free-vector/editable-hotel-logo-vector-business-corporate-identity-hostel_53876-111553.jpg?w=2000" width="40px" alt="Hostels.com" className='me-4'/>
       <div className="input-group">
           <input type="text" className="form-control" placeholder="Type here" value={data} onChange={(z)=> setData(z.target.value)}></input>
        </div>&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="button" value="Search" className='btn btn-outline-light border border-primary border-2' onClick={searchHandler}/>&nbsp;&nbsp;&nbsp;
        <select name="" id="" className='d-flex mx-auto'>
         <option hidden>Select Area/Locality</option>
         <option value="kphb">Kphb</option>
         <option value="kondapur">Kondapur</option>
         <option value="lb nagar">LB Nagar</option>
         <option value="madhapur">Madhapur</option>
         <option value="raidurg">Raidurg</option>
         <option value="miyapur">Miyapur</option>
        </select>
        <br />
    </div>
    <div className='d-flex w-75 ms-auto'>
      <button className='btn btn-outline-success' onClick={()=>navigate('/AddRoom')}>ADD ROOM</button>&nbsp;&nbsp;&nbsp;
      <button className='btn btn-outline-success' onClick={()=>{navigate('/AddBed')}}>ADD BED</button>&nbsp;&nbsp;&nbsp;
      <button className='btn btn-outline-success' onClick={()=>{navigate('/AddTenant')}}>APPROVE TENANT</button>
    </div>
    </div>
    </div>
    </div>
  )
}


export default Hostel;