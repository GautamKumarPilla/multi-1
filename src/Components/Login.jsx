import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom"; 
import * as Yup from 'yup';

const Login =(props)=>{
    const teleport = useNavigate();
    const [login, setLogin] = useState([]);
    const [username, setUsername] = useState([]);
    const [pass, setPass] = useState([]);
    const [admin, setAdmin] = useState({});

  useEffect(()=>{
      setAdmin(props.admin.isLoggedIn)
    },[props.admin.isLoggedIn]);

    const myform = useFormik({
      initialValues:{
          Username:'',
          Password:''
      },
      validationSchema:Yup.object({
          Username:Yup.string().max(20).required("*Username is a required field"),
          Password:Yup.string().matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/,"given password is not in the required format")
          .required("*Password is a required field")
      }),
      onSubmit:(values)=>{
        setUsername(values.Username);
        setPass(values.Password); 
         console.log(username);
         console.log(pass);
       // teleport('/booking');
      }
  })

  useEffect(()=>{
      axios.get(`http://localhost:4000/Admin?Username=${username}&Password=${pass}`).then((res)=>{
        console.log([...res.data]);
      }) 
    },[])

const User = () =>{
      axios.get("http://localhost:4000/Signup?Username=Username&Password=Password").then((res)=>{
        alert("Sign-In Successful !")
          setLogin([...res.data]);
          teleport('/booking'); 
       }).catch(function (error){
        alert("Please enter correct login details",error)}
        )   
}
// const inputHandler=(z)=>{
//    if(!z.target.value===''){
//      teleport('/booking');
//     }}

function updateUser(){
   console.log(admin)
    props.dispatch({type:'ADMIN',payload:admin})
   }

    return(
    <div className="bg-text border rounded">
    <div className="mx-auto">
    <div className="mt-5">
    <div className="w-25 mx-auto" onSubmit={myform.handleSubmit}>
        <form className="form-control bg-primary-subtle">
            <h3 className=".text-warning-emphasis text-center">Login</h3>

            <label htmlFor="username" className="form-lable mt-2 text-primary fw-bold" >Username</label>
            <input type="text" name="Username" id="username" onBlur={myform.handleBlur} onChange={myform.handleChange} value={myform.values.Username} placeholder="Enter username" className="form-control" />
            <p className="text-danger">{myform.touched.Username && myform.errors.Username}</p>

            <label htmlFor="password" className="form-lable mt-2 text-primary fw-bold">Password</label>
            <input type="password" name="Password" id="password" onBlur={myform.handleBlur} onChange={myform.handleChange} value={myform.values.Password} placeholder="Enter password" className="form-control"/>
            <p className="text-danger">{myform.touched.Password && myform.errors.Password}</p>

            
            <div className="mt-2">
            <Link to="/mail" className="text-decoration-none"><p>Forgot Password?</p></Link>
            </div>
            <div className="d-flex justify-content-center">
            <button className="btn btn-primary mt-2" id="liveAlertBtn" type="submit" onClick={updateUser} onSubmit={User} >Login</button>
            </div>
        </form>
        <Link to="/signup" className="text-light">Don't have an account yet?(SignUp)</Link>
    </div>
    </div>
    </div>
    </div>
    )
}; 

export default connect(store=>store)(Login);

// GET /posts?title=json-server&author=typicode
// GET /posts?id=1&id=2
// GET /comments?author.name=typicode

// axios({
//   method: 'GET',
//   url: 'http://localhost:4000/Signup',
//   data: {
//         "Username": username,
//         "Password": pass
//       }
// }).then(()=>{
//   console.log(username);
//   console.log(pass);
// });  

// render()
// {
//  const isLoggedin = true;
//  return (
//    <div>
//      {isLoggedin ? (
//        <Link to="/dashboard"/>
//      ) : (
//        ''
//      )}
//    </div>