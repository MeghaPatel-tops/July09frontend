import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Productedit() {
  const navigate = useNavigate();
  const pid = useParams().pid;
   const [product,setProduct]=useState({});

   const getProductByID = async()=>{
      try {
           const res = await axios.get('http://localhost:3000/products/'+pid);
           console.log(res.data);
           setProduct(res.data)
           
      } catch (error) {
          console.log(error);
          
      }
   }
    
   useEffect(()=>{
    getProductByID()
   },[])

   const handleClick = async()=>{
        try {
             let res = axios.put('http://localhost:3000/products/'+pid,product);
             if(res){
                 alert("product successfully updated");
                 navigate('/admin/product');
             }
        } catch (error) {
          
        }
          
   }

      const handleChange=(e)=>{
          const {name,value}=e.target;
          setProduct({
              ...product,
              [name]:value
          })
      }
  return (
    <div>
        <h2>Productedit </h2>
         <div className="container">
            <h1>Create Product</h1>
             <div className="col-xl-8">
                   <form  method='post'>
                <div className="form-group">
                    <label for="email">Product Name</label>
                    <input type="text" className="form-control"  name="productName" onChange={handleChange} value={product.productName}/>
                </div>
                <div className="form-group">
                    <label for="pwd">Price:</label>
                    <input type="text" className="form-control"  name="price" onChange={handleChange} value={product.price}/>
                </div>
                 <div className="form-group">
                    <label for="pwd">Description:</label>
                    <input type="text" className="form-control"  name="description" onChange={handleChange} value={product.description}/>
                </div>
                 <div className="form-group">
                    <label for="pwd">Image:</label>
                    <input type="text" className="form-control"  name="productImage" onChange={handleChange}  value={product.productImage} />
                </div>
                
                <button type="button" className ="btn btn-primary mt-5"  onClick={handleClick}>Submit</button>
                </form>
             </div>
         </div>
    </div>
  )
}

export default Productedit