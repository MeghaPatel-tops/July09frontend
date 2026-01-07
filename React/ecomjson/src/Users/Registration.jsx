import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Registration() {
     const [user,setUser]= useState({});
     const navigate = useNavigate();

     const handleChange = (e)=>{
          const{name,value}= e.target;
          setUser({
            ...user,
            [name]:value
          })
     }

     const handleClick=async()=>{
        try {
            let getRes = await axios.get('http://localhost:3000/users?email='+user.email);
            let arr=getRes.data;
            if(arr && arr.length>0){
                alert("Email Id already used")
            }
            else{
                const res = await axios.post('http://localhost:3000/users',user);

            if(res){
                alert("Register successfully!")
                navigate('/login')
            }
            }
            
        } catch (error) {
            console.log(error);
            
        }
        
     }
  return (
   
    <div>
        <div className="container border">
            <h2>Registration Form</h2>
<form method='post'>

      <div data-mdb-input-init class="form-outline mb-4">
        <label class="form-label" for="registerUsername" >Username</label>
        <input type="text" id="registerUsername" class="form-control" name='username' onChange={handleChange} />
        
      </div>

     
      <div data-mdb-input-init class="form-outline mb-4">
        <label class="form-label" for="registerEmail">Email</label>
        <input type="email" id="registerEmail" class="form-control" name='email' onChange={handleChange}/>
        
      </div>

     
      <div data-mdb-input-init class="form-outline mb-4">
        <label class="form-label" for="registerPassword">Password</label>
        <input type="password" id="registerPassword" class="form-control" name='pwd' onChange={handleChange}/>
        
      </div>      
      <button type="button" class="btn btn-primary btn-block mb-3" onClick={handleClick}>Sign in</button>
    </form>
        </div>
    </div>
  )
}

export default Registration