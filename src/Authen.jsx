import React,{useState,useEffect} from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const auth = firebase.auth();

firebase.initializeApp({
  apiKey: "AIzaSyDWXAQYs6yecdyyczUVxQnDQ-sHxkT_OgM",
  authDomain: "signin-project-75059.firebaseapp.com",
  projectId: "signin-project-75059",
  storageBucket: "signin-project-75059.appspot.com",
  messagingSenderId: "8371367472",
  appId: "1:8371367472:web:1dc16cb3dfc5932a05c7f5"
})

const Authen = () => {
  const [user,setUser] = useState(null);

useEffect(()=>{
  auth.onAuthStateChanged(person=> {
    if(person){
      setUser(person)
    }
    else{
      setUser(null)
    }
  })
})
const signInWithGoogle = async () =>{
  try{
    await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  catch(err){
    console.log(err);
  }
}

  return (
    <div>
        <center>
          {user ?
          (<div>
           <h1>Welcome to home page </h1>
          <button onClick={()=>auth.signOut()}>Sign Out</button>
          </div>)
          :
          (<button onClick={signInWithGoogle}>Sign In With Google</button>)
          }
        </center>
    </div>
  )
}

export default Authen;