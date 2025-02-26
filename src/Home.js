import React from 'react'
import {auth} from './Firebase.js';

const Home = ({presentUser}) => {
    return (
        <div>
           <h1> Welcome {presentUser.email}</h1>
           <button onClick={() => auth.signOut()}>Sign Out</button>
        </div>
    )
}

export default Home;