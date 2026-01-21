import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react'
import { db } from '../Firebase/Firebase';
import { useNavigate } from 'react-router-dom';

function Prouctcreate() {
    const [product,setProduct]=useState({});
    const navigate = useNavigate();

    const handleChange= (e)=>{
        const {name,value}=e.target;
        setProduct({
            ...product,
            [name]:value
        })
    }
    const handleClick=async()=>{
        console.log(product);
        try {
            const res = await addDoc(collection(db,"products"),product);
            console.log(res);
            navigate('/product')
            
        } catch (error) {
            console.log(error);
            
        }
        
    }
  return (
    <div>
        <h1>
            Prouctcreate
        </h1>
        <div className="container">
<form  method='post'>
  <div className="mb-3 mt-3">
    <label for="email" className="form-label">Product Name</label>
    <input type="text" className="form-control" id="email" placeholder="Enter Product name" name="pname" onChange={handleChange}/>
  </div>
  <div className="mb-3">
    <label for="pwd" className="form-label">Price:</label>
    <input type="text" className="form-control" id="pwd" placeholder="Enter price" name="price" onChange={handleChange} />
  </div>
  <div className="mb-3">
    <label for="pwd" className="form-label">Decription:</label>
    <input type="text" className="form-control" id="pwd" placeholder="Enter price" name="desc" onChange={handleChange} />
  </div>
  
  <button type="button" className="btn btn-primary" onClick={handleClick}>Submit</button>
</form>
        </div>
    </div>
  )
}

export default Prouctcreate