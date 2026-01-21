import { doc, getDoc, setDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '../Firebase/Firebase';

function Productedit() {
    const pid= useParams().pid;
    const [product,setProduct]=useState({});
    const navigate = useNavigate();
    
    
    const handleChange= (e)=>{
        const {name,value}=e.target;
        setProduct({
            ...product,
            [name]:value
        })
    }

    useEffect(()=>{
        getProductById(pid)
    },[])

    const getProductById=async(pid)=>{
        try {
            const docRef= doc(db,"products",pid);
            const singleProduct = await getDoc(docRef);
            const productOne= singleProduct.data();
           setProduct(productOne)
            
        } catch (error) {
            console.log(error);
            
        }
    }

    const updateProduct = async()=>{
        try {
            const docRef = doc(db,"products",pid);
            const res = await setDoc(docRef,product,{ merge: true })
            navigate('/product')
            
        } catch (error) {
            console.log(error);
            
        }
    }

  return (
    <div>
          <h1>
            ProuctEdit
        </h1>
        <div className="container">
<form  method='post'>
  <div className="mb-3 mt-3">
    <label for="email" className="form-label">Product Name</label>
    <input type="text" className="form-control" id="email" placeholder="Enter Product name" name="pname" onChange={handleChange} value={product.pname}/>
  </div>
  <div className="mb-3">
    <label for="pwd" className="form-label">Price:</label>
    <input type="text" className="form-control" id="pwd" placeholder="Enter price" name="price" onChange={handleChange} value={product.price} />
  </div>
  <div className="mb-3">
    <label for="pwd" className="form-label">Decription:</label>
    <input type="text" className="form-control" id="pwd" placeholder="Enter price" name="desc" onChange={handleChange} value={product.desc} />
  </div>
  
  <button type="button" className="btn btn-primary" onClick={updateProduct} >Update</button>
</form>
        </div>
    </div>
  )
}

export default Productedit