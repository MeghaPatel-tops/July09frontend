import React, { useState } from 'react'

function Userlist() {
    const [users,setUsers]=useState([]);
     const [singleuser,setSingleUser]=useState({})
     const [edit,setEdit]=useState(0);
     const [uid,setUid]=useState(null)

     const handleChange = (e)=>{
          const {name,value}=e.target;
          setSingleUser({
            ...singleuser,
            [name]:value
          })
     }

     const handleClick = ()=>{
          console.log(singleuser);
          let newArray =singleuser;
          console.log(newArray);

          setUsers([
            ...users,
            newArray
          ])

          setSingleUser({})
          
          
          
     }
 

     const delUser=(uid)=>{
        
           let newArray = users.filter((index,i)=>i!==uid);
           console.log(newArray);

           setUsers(newArray)
           
           
     }
     const editUser=(uid)=>{
        setEdit(1)
        setUid(uid)
          setSingleUser(users[uid])    
     }

     const updateClick =()=>{
            const updatedUsers = users.map((user, index) =>
        index === uid ? singleuser : user
    );
        setUsers(updatedUsers);
    setEdit(0);
    setSingleUser({});
             
           
     }


    
    
   
  return (
    <div className='m-5'>
        <h1>User Deatils</h1>
        <fieldset className='border-10 border-solid border-black p-5'>
            <legend>Add New User</legend>
            <label htmlFor="">Username</label>
            <input type="text" name="username" id="" onChange={handleChange} value={singleuser.username ?? ""} />
            <br />
            <br />
           
            <label htmlFor="">Email</label>
            <input type="email" name="email" id="" onChange={handleChange} value={singleuser.email ?? ""}/>
            <br />
            <br />
            {
                (edit===0) ?
                <button onClick={handleClick}  >Submit</button>
                :
                <button onClick={updateClick}  >Update</button>
            }
            <h2>Users Details</h2>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((index,i)=>(
                            <tr key={i}>
                                <td>{index.username}</td>
                                <td>{index.email}</td>
                                <td><button onClick={()=>{
                                    delUser(i)
                                }}>Delete</button></td>
                                 <td><button onClick={()=>{
                                    editUser(i)
                                }}>Edit</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </fieldset>
    </div>
  )
}

export default Userlist