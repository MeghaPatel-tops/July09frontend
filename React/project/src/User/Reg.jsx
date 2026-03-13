import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUsers } from '../Redux/Users';
import { useNavigate } from 'react-router-dom';

function Reg() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {usermsg,isloading,uerror} = useSelector((state)=>state.users)
    const [user,setUser]=useState({
        username:"",
        email:"",
        password:"",
        contact:""

    });
    const [error,setError]=useState([]);

    

    const handleChange = (e)=>{
        const {name,value}=e.target;
        setUser({
            ...user,
            [name]:value
        })
    }

    const isValidate = ()=>{
           let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
        let regexP = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    setError([]); // clear previous errors

            if (user.username == "") {
                setError(error => [...error, "UserName is Required"]);
                return false;
            }

            if (user.email == "") {
                setError(error => [...error, "Email is Required"]);
                return false;
            }
            
            

            if (!regex.test(user.email)) {
                setError(error => [...error, "Enter valid Email ex: abc@example.com"]);
                return false;
            }
            
             if (user.password == "") {
                setError(error => [...error, "Password is Required"]);
                return false;
            }
             if (!regexP.test(user.password)) {
                setError(error => [...error, "Password include A-Z,a-z 0-9 special char leng>8"]);
                return false;
            }
             if (user.contact == "") {
                setError(error => [...error, "Contact Number is Required"]);
                return false;
            }


    return true;
        
        
    }

    const handleClick = ()=>{
        let flag = isValidate();
         if(flag){
             dispatch(addUsers(user));
             setTimeout(()=>{
              navigate('/login')
             },2000)
         }
        
    }

    useEffect(()=>{

    },[error,isloading,usermsg])
  return (
    <div>
        <div class="h-full bg-gray-900">
        
<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" class="mx-auto h-10 w-auto" />
    <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Sign up to your account</h2>
  </div>
   {
        error && error.length>0 ?
         <div className='bg-white text-black p-5'>
            <ul>
                {
                    error.map((index,i)=>(
                        <li key={i}>{index}</li>
                    ))
                }
            </ul>    
        </div>:
        ''
   }
    {
        isloading===true &&
         <div className='bg-white text-black p-5'>
            <p>Loading....</p>
        </div>
   }
   {
        usermsg &&
         <div className='bg-white text-black p-5'>
            <p>{usermsg}</p>
        </div>
   }
   {
        uerror &&
         <div className='bg-white text-black p-5'>
            <p className='text-red-500'>{uerror}</p>
        </div>
   }

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form  method="POST" class="space-y-6">
      <div>
        <label for="email" class="block text-sm/6 font-medium text-gray-100">Username</label>
        <div class="mt-2">
          <input id="email" type="text" name="username" required autocomplete="email" class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" onChange={handleChange} />
        </div>
      </div>
       <div>
        <label for="email" class="block text-sm/6 font-medium text-gray-100">Email address</label>
        <div class="mt-2">
          <input id="email" type="email" name="email" required autocomplete="email" class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"  onChange={handleChange} />
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
        <label for="email" class="block text-sm/6 font-medium text-gray-100">Contact  Number</label>
        <div class="mt-2">
          <input id="email" type="text" name="contact" required autocomplete="email" class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"  onChange={handleChange} />
        </div>
      </div>

      <div>
        <button type="button" class="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" onClick={handleClick}>Sign in</button>
      </div>
    </form>

    <p class="mt-10 text-center text-sm/6 text-gray-400">
      Not a member?
      <a href="#" class="font-semibold text-indigo-400 hover:text-indigo-300">Start a 14 day free trial</a>
    </p>
  </div>
</div>

    </div>
    </div>
  )
}

export default Reg