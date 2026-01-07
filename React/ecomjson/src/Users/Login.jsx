import axios from 'axios';
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Login() {
    const [user,setUser]=useState({});
    const navigate=useNavigate();

    const handleChange = (e)=>{
        const {name,value}=e.target;
        setUser({
            ...user,
            [name]:value
        })
    }

    const handleClick = async()=>{
         try {
            let url=`http://localhost:3000/users?email=${user.email}&&pwd=${user.pwd}`; 
            let getRes = await axios.get(url);
            if(getRes.data){
                alert("Login successfully");
                localStorage.setItem('ecom-user',JSON.stringify(getRes.data[0]));
                navigate('/');
            }
         } catch (error) {
              console.log(error);
              
         }
    }
  return (
    <div>
       
        <div className="container border p-5">
              <h2>Login Form</h2>
     <form method='post'>
     
      <div data-mdb-input-init class="form-outline mb-4">
        <label class="form-label" for="loginName">Email or username</label>
        <input type="email" id="loginName" class="form-control" name="email" onChange={handleChange} />
        
      </div>

     
      <div data-mdb-input-init class="form-outline mb-4">
         <label class="form-label" for="loginPassword">Password</label>
        <input type="password" id="loginPassword" class="form-control" name="pwd" onChange={handleChange}/>
       
      </div>

     
      

      
      <button type="button"  class="btn btn-primary btn-block mb-4" onClick={handleClick}>Sign in</button>

     
      <div class="text-center">
        <p>Not a member? <NavLink to={"/registration"}>Register</NavLink></p>
      </div>
    </form>
 
    
  
</div>
                </div>
     

  )
}

export default Login