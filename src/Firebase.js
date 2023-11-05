// import firebase from "firebase";
import "firebase/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

var firebaseConfig = {
    apiKey: "AIzaSyBXdx41wjOD9OZGwz9AvL2ZDRXMImvkGWU",
    authDomain: "authentication-app-22b5d.firebaseapp.com",
    projectId: "authentication-app-22b5d",
    storageBucket: "authentication-project-22b5d.appspot.com",
    messagingSenderId: "105830194688781758746",
    appId: "1:460079948542:web:73e79db4a70ed91dd8fbaf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;