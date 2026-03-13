import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom'
import { getUserAuth } from '../Redux/Users';

function Login() {
  const dispatch=useDispatch();
  const navigate = useNavigate();

  const {loggedUser,usermsg}= useSelector((state)=>state.users)
   const [user,setUser]=useState({
         
          email:"",
          password:"",
         
  
      });

      const handleChange = (e)=>{
          const {name,value}=e.target;
          setUser({
              ...user,
              [name]:value
          })
      }

      useEffect(()=>{

      },[usermsg])

      const handleClick = ()=>{
           dispatch(getUserAuth(user))
         
         setTimeout(()=>{
            navigate('/')
         },2000)

      }

     
  return (
    <div class="h-full bg-gray-900">

     
        
<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" class="mx-auto h-10 w-auto" />
    <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Sign in to your account</h2>
  </div>
   <div className='text-white'>
          {
            usermsg && <p>{usermsg}</p> 
          }
      </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form  method="POST" class="space-y-6">
      <div>
        <label for="email" class="block text-sm/6 font-medium text-gray-100">Email address</label>
        <div class="mt-2">
          <input id="email" type="email" name="email" required autocomplete="email" class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" onChange={handleChange} />
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm/6 font-medium text-gray-100">Password</label>
         
        </div>
        <div class="mt-2">
          <input id="password" type="password" name="password" required autocomplete="current-password" class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"  onChange={handleChange}/>
        </div>
      </div>

      <div>
        <button type="button" class="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" onClick={handleClick}>Sign in</button>
      </div>
    </form>

    <p class="mt-10 text-center text-sm/6 text-gray-400">
      Not a member?
      
      <NavLink to={'/registration'} class="font-semibold text-indigo-400 hover:text-indigo-300" >Start a 14 day free trial</NavLink>
    </p>
  </div>
</div>

    </div>
  )
}

export default Login