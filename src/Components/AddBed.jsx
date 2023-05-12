import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddBed =()=>{
  const teleport = useNavigate();
const [newRoom, setNewRoom] = useState('');
const [status,setStatus]= useState('');
const [current,setCurrent]= useState('');

  const NewBed = () =>{
    axios({
        method: 'POST',
        url: 'http://localhost:4000/Beds',
        data:{
           "RoomId": newRoom,
           "Status": status
        } 
      }).then(()=>{
        alert("ADDED !")
      })
  }   
    
  return (
    <div className="bg-text">
        <div className="w-50 mx-auto">
      <div className="mt-5">
    <div className="w-50 mx-auto">
            <div className='d-flex justify-content-center mt-3'>
              
            </div>
            <h3 className=".text-warning-emphasis text-center"><i className='display-6'>Add New Bed</i></h3>
            <label htmlFor="">Room-ID</label>
            <input type="text" onChange={(z)=>{setNewRoom(z.target.value)}} required placeholder="" className="form-control" />
            <label htmlFor="">Status</label>
            <input type="text" onChange={(z)=>{setStatus(z.target.value)}} required placeholder="" className="form-control"/>
            <div className="mt-2">
              
            </div>
            {/* <label htmlFor="">Current Tenants</label>
            <input type="text" onChange={(z)=>{setCurrent(z.target.value)}} required className='form-control'/> */}
            <div className="d-flex justify-content-center">
            <button onClick={NewBed} className="btn btn-outline-info mt-2">Add Bed</button>
            </div>
        </div>
        <button className='btn btn-dark mt-2 mx-3' onClick={()=>{teleport('/dashboard')}}>&#9666;Back</button>
    </div>
    </div>
    </div>
  )
}

export default AddBed;

// {
//   "Roomid": "",
//   "Status": "",
//   "Current Tenants": [],
//   "Old Tenants": []
// }
// {setNewRoom({...newRoom,Roomid:z.target.value})}