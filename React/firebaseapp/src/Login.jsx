import React from 'react'
import { signInWithPopup } from 'firebase/auth'
import { auth,googleProvider } from './Firebase/Firebase'

function Login() {
    const userLogin = async()=>{
       try {
         const result = await signInWithPopup(auth,googleProvider);

        const user = result.user;
        console.log(user);
       } catch (error) {
           console.error("Login failed:", error.message)
       }
        
    }
  return (
    <div>
        <button onClick={userLogin}>Login with google</button>
    </div>
  )
}

export default Login