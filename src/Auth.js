import React,{useEffect,useState} from 'react'
import { auth } from './Firebase.js';
import UserAuth from './UserAuth';
import Home from './Home';

const Auth = () => {
  const [presentUser,setPresentUser] = useState(null);
  useEffect(()=>{
    auth.onAuthStateChanged(user =>{
      if(user){
      setPresentUser({
        uid:user?.uid,
        email:user?.email
      })
    }
    else{
      setPresentUser(null);
    }
    })
  },[])
  return (
    <div>
      <center>
        {presentUser ? <Home presentUser={presentUser}/> : <UserAuth /> }
      </center>
    </div>
  )
}

export default Auth;