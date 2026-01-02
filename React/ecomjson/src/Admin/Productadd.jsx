import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Productadd() {
    const navigate = useNavigate();
    const [product,setProduct]=useState({});
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setProduct({
            ...product,
            [name]:value
        })
    }

    const handleClick = async()=>{
        let res = await axios.post('http://localhost:3000/products',product);
        if(res.data){
            alert("Product successfully added")
            navigate('/admin/product')
        }
    }
  return (
    <div    >
         <div className="container">
            <h1>Create Product</h1>
             <div className="col-xl-8">
                   <form  method='post'>
                <div className="form-group">
                    <label for="email">Product Name</label>
                    <input type="text" className="form-control"  name="productName" onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label for="pwd">Price:</label>
                    <input type="text" className="form-control"  name="price" onChange={handleChange}/>
                </div>
                 <div className="form-group">
                    <label for="pwd">Description:</label>
                    <input type="text" className="form-control"  name="description" onChange={handleChange}/>
                </div>
                 <div className="form-group">
                    <label for="pwd">Image:</label>
                    <input type="text" className="form-control"  name="productImage" onChange={handleChange}/>
                </div>
                
                <button type="button" className
                
                
                
                
                
                ="btn btn-primary mt-5" onClick={handleClick}>Submit</button>
                </form>
             </div>
         </div>
    </div>
  )
}

export default Productadd