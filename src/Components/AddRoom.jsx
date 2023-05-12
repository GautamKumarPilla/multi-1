import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddRoom = () => {
  const teleport = useNavigate();
  const [room, setRoom] = useState();
  const [floor,setFloor]= useState("");

  const NewRoom = () =>{
    axios({
        method: 'POST',
        url: 'http://localhost:4000/Rooms',
        data: {
            "RoomNo": room,
            "Floor": floor
            }
      }).then(()=>{
        alert("ADDED !")
      });  
    }
const selectFloor=(z)=>{
   setFloor(z.target.value);
}

  return (
    <div className="bg-text">
    <div className="w-50 mx-auto">
  <div className="mt-5">
<div className="w-50 mx-auto">
        <h3 className=".text-warning-emphasis text-center"><i className='display-6'>Add New Bed</i></h3>

        <label htmlFor="">Room No</label>
        <input type="text" onChange={(z)=>{setRoom(z.target.value)}} required placeholder="" className="form-control" />

        <label htmlFor="search">Floor</label>
          <select name="" id="" onChange={selectFloor} value={floor} className="form-select">
            <option defaultValue={floor} selected disabled>Select a floor</option>
            <option id='search' value="FirstFloor">First Floor</option>
            <option id='search' value="SecondFloor">Second Floor</option>
            <option id='search' value="ThirdFloor">Third Floor</option>
            <option id='search' value="FourthFloor">Fourth Floor</option>
            <option id='search' value="FifthFloor">Fifth Floor</option>
          </select>
        
      
        <div className="d-flex justify-content-center">
        <button onClick={NewRoom} className="btn btn-outline-info mt-2">Add Bed</button>
        </div>
    </div>
    <button className='btn btn-dark mt-2 mx-3' onClick={()=>{teleport('/dashboard')}}>&#9666;Back</button>
</div>
</div>
</div>
  )
}

export default AddRoom