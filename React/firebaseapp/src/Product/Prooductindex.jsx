import { collection, deleteDoc, doc, onSnapshot, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../Firebase/Firebase'
import { NavLink } from 'react-router-dom';

function Prooductindex() {
    const [products,setProducts]=useState([]);
    const getProduct = async()=>{
        try {
            const q= query(collection(db,"products"));
            const  docCol= onSnapshot(q,(querySnaphort)=>{
                let productArray=[];
                querySnaphort.forEach((doc)=>{
                    productArray.push({...doc.data(),id:doc.id})
                })
                console.log(productArray);
                
                setProducts(productArray)

            })
        } catch (error) {
            console.log(error);
            
        }
    }

    const delProduct=async(pid)=>{
        try {
            const docRef = doc(db,"products",pid)
            const res = await deleteDoc(docRef);
            if(res){
                alert("product deleted");
            }
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{
        getProduct();
       
        
    },[])
  return (
    <div>
        <NavLink to={'/productcreate'} className={'btn btn-primary'}>Add New</NavLink>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Product Name</th>
      <th scope="col">Price</th>
      <th scope="col">Description</th>
      <th colSpan={2}>Action</th>
    </tr>
  </thead>
  <tbody>
     {
        products.map((index,i)=>(
            <tr key={i}>
            <td scope="row">{i+1}</td>
            <td>{index.pname}</td>
            <td>{index.price}</td>
            <td>{index.desc}</td>
            <td><button className='btn btn-danger' onClick={()=>{
                delProduct(index.id)
            }}>Delete</button>
            <NavLink to={'/productedit/'+index.id} className={'btn btn-success'}>Edit</NavLink>
            
            </td>
            </tr>
        ))
     }
    
  </tbody>
</table>
    </div>
  )
}

export default Prooductindex