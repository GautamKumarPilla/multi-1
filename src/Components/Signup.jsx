import React, { useState } from "react";
import axios from "axios";
import { Field,Form, Formik } from "formik";
import * as Yup from 'yup';
import './Signup.css';

const SignUp =()=>{
    const [newUser,setNewUser] = useState({});
    
const Submit=()=>{
        axios({
            method: 'POST',
            url: 'http://localhost:4000/Signup',
            data: newUser
        }).then(()=>{
            alert("Signup Successful!")
        });
    }
const Auth=(e)=>{
   setNewUser(e.target.value)
}    

    return(
        <div className="bg-sign">
        <div className="w-50 mx-auto">
            <div className="">
                <Formik
                    initialValues={{
                        'Username':'',
                        'Fullname':'',
                        'Mobile':'',
                        'Email':'',
                        'Pincode':'',
                        'City':'',
                        'State':'',
                        'Password':'',
                        'RePassword':''
                    }}
                    
                    validationSchema={Yup.object({
                        Username:Yup.string().max(30).min(10).required('*Please enter your email or mobile number'),
                        Fullname:Yup.string().max(20).min(10).required('*Enter your fullname'),
                        Mobile:Yup.string().max(10).required('*Enter your 10 digits mobile number'),
                        Email:Yup.string().required('*Enter your email'),
                        Pincode:Yup.string().required('*Enter pincode'),
                        City:Yup.string().required('*Enter city'),
                        State:Yup.string().required('*Enter state'),
                        Password:Yup.string().required('*Enter your password').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8})/,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),
                        RePassword:Yup.string().oneOf([Yup.ref('Password'),null],'*Password must match')
                    })}

                    onSubmit={(values)=>{
                        //console.log(values);
                        setNewUser({...newUser,...values});
                    }}
                >
                    {
                        (formik)=>{
                            return(
                                <Form onSubmit={formik.handleSubmit} className="form-control bg-success-subtle" >
                                    <h2 className="border-bottom text-center">Sign-Up</h2>
                                    <label htmlFor="usa" className="form-lable mt-1">Username</label>
                                    <Field className="form-control" name="Username" placeholder="Enter username or mail"></Field>
                                    <div className="text-danger"><small>{formik.touched.Username && formik.errors.Username}</small></div>

                                    <label htmlFor="fn" className="form-lable mt-1">Full Name</label>
                                    <Field className="form-control" name="Fullname" placeholder="Enter fullname"></Field>
                                    <div className="text-danger"><small>{formik.touched.Fullname && formik.errors.Fullname}</small></div>

                                    <label htmlFor="mo" className="form-lable mt-1">Mobile</label>
                                    <Field className="form-control" name='Mobile' placeholder="Enter contact number"></Field>
                                    <div className="text-danger"><small>{formik.touched.Mobile && formik.errors.Mobile}</small></div>

                                    <label htmlFor="em" className="form-lable mt-1">Email ID</label>
                                    <Field className="form-control" name='Email' placeholder="Enter email"></Field>
                                    <div className="text-danger"><small>{formik.touched.Email && formik.errors.Email}</small></div>

                                    <label htmlFor="pc" className="form-lable mt-1">Pincode</label>
                                    <Field className="form-control" name='Pincode' placeholder="Enter here"></Field>
                                    <div className="text-danger"><small>{formik.touched.Pincode && formik.errors.Pincode}</small></div>

                                    <label htmlFor="cy" className="form-lable mt-1">City</label>
                                    <Field className="form-control" name='City' placeholder="Enter here"></Field>
                                    <div className="text-danger"><small>{formik.touched.City && formik.errors.City}</small></div>

                                    <label htmlFor="se" className="form-lable mt-1">State</label>
                                    <Field className="form-control" name='State' placeholder="Enter here"></Field>
                                    <div className="text-danger"><small>{formik.touched.State && formik.errors.State}</small></div>

                                    <label htmlFor="pwd" className="form-lable mt-1">Password</label>
                                    <Field className="form-control" name='Password' placeholder="Enter password"></Field>
                                    <div className="text-danger"><small>{formik.touched.Password && formik.errors.Password}</small></div>

                                    <label htmlFor="rpwd" className="form-lable mt-1">Confirm Password</label>
                                    <Field className="form-control" name='RePassword' placeholder="Re-enter password"></Field>
                                    <div className="text-danger"><small>{formik.touched.RePassword && formik.errors.RePassword}</small></div>
                                    <div style={{textAlign:'center'}}>
                                        <button type="submit" onClick={Submit} className="btn btn-success w-25 mx-1 mt-3">Submit</button>
                                    </div>
                                </Form>
                            )
                        }
                    }
                </Formik>
            </div>
            <a onClick={Auth}>Signup with google</a>            
        </div>
    </div>
    )
};

export default SignUp;