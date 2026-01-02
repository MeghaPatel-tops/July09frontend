import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function Product() {
  const [products,setProduct]=useState([]);

  const getProducts= async()=>{
      let res = await axios.get('http://localhost:3000/products');
      console.log(res.data);
      setProduct(res.data)
      
  }

  useEffect(()=>{
    getProducts();
  },[])
  return (
    <div>
        <div className="container border">
            <h1>Product Index</h1>
            <div className="row">
                  <div className="col-xl-12">
                         <NavLink to={'/admin/productadd'} className={"btn btn-primary"}>Add New</NavLink>
                  </div>
            </div>
            <div className="row">
                 <table class="table">
                      <thead>
                        <tr>
                          <th>Productname</th>
                          <th>Price</th>
                          <th>Description</th>
                          <th>Image</th>
                        </tr>
                        
                      </thead>
                      <tbody>
                           {
                            products.map((index)=>(
                                 <tr>
                                  <td>{index.productName}</td>
                                  <td>{index.price}</td>
                                  <td>{index.description}</td>
                                  <td>
                                    <img src={index.productImage} alt="" height={"100px"} width={"100px"}/>
                                  </td>
                                </tr>
                            ))
                           }
                      </tbody>
                 </table>     
            </div>
        </div>
    </div>
  )
}

export default Product