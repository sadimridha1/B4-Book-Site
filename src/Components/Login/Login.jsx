import React, { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase/firebase.init';

const Login = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    const handleGoogleSingIn = () => {
       signInWithPopup(auth, provider)
       .then(result => {
            const loginUser = result.user;
            console.log('user:', loginUser)
            console.log('successfully Login')
            setUser(loginUser)
       })
       .catch(error => {
            const err = error.message;
            console.log('error:', err)
       })
    }

    const handleSingOut = () => {
        signOut(auth)
        .then(() => {
            setUser(null)
            console.log('successfully logout')
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    return (
        <div className='text-center mt-20'>
            {
                user ?
                <button className='bg-green-500 px-4 py-2 text-white text-xl rounded-md' onClick={handleSingOut}>Sing Out</button> 
                :

                <button onClick={handleGoogleSingIn} className='bg-green-500 px-4 py-2 text-white text-xl rounded-md'>Google Login</button>
            
            }

            {user && <div>
                <h1>UserName: {user.displayName}</h1>
                <h1>Email: {user.email}</h1>
                <img src={user.photoURL} alt="" />
            </div>}
        </div>
    );
};

export default Login;