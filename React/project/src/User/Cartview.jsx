import React, { useEffect, useState } from 'react'
import { db } from '../Firebase/firebase';
import { where,query,collection ,getDocs, getDoc ,doc} from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './Navbar';
import { getCartData } from '../Redux/Product';


function Cartview() {
    const user = JSON.parse(localStorage.getItem('users'));
    const [total,settotal]=useState(0);
    const dispatch = useDispatch();
    const {isloading,cartarray,error}= useSelector((state)=>state.product);   
        
   const handlePayment  = (total)=>{
    const user = localStorage.getItem('users')
       const options = {
            key: "", // from Razorpay dashboard
            amount: total*100, // ₹500 (in paise)
            currency: "INR",
            name: "My Shop",
            description: "Test Transaction",
            handler: function (response) {
            console.log("Payment Success:", response);
            alert("Payment Successful");
            },
            prefill: {
            name: user.username,
            email: user.email,
            contact: user.contact,
            },
            theme: {
            color: "#3399cc",
            },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
   }
    
    useEffect(()=>{
        dispatch(getCartData(user.id))
        
    },[])

    useEffect(()=>{
         let ttl = cartarray ? cartarray.reduce((sum,index)=>sum+(index.qty*index.product.price),0) : 0;
         console.log(ttl);
         settotal(ttl)
    },[isloading])
    
  return (
    <div>
        <Navbar />
       
        <div className="container p-20">

             <h2 className='text-2xl'>Cart Details</h2>
             {
                isloading && <p>Loading....</p>
             }
            <table class="table-auto border-collapse border border-gray-400 ">
                <thead>
                    <tr>
                    <th class="border border-gray-300 p-5">Srno</th>
                    <th class="border border-gray-300 ...">ProductName</th>
                    <th class="border border-gray-300 ...">Image</th>
                    <th class="border border-gray-300 ...">Price</th>
                    <th class="border border-gray-300 ...">Qty</th>
                    <th class="border border-gray-300 ...">Subtotal</th>
                </tr>
                </thead>
                <tbody>
                    {
                        cartarray && cartarray.map((index,i)=>(
                           
                            <tr key={i}>
                                <td class="border border-gray-300 p-5">{i+1}</td>
                                <td class="border border-gray-300 p-5">{index.product.pname}</td>
                                <td class="border border-gray-300 p-5">
                                    <img src={index.product.pimage} alt="" height={"50px"} width={"50px"}/>
                                </td>
                                <td class="border border-gray-300 p-5">{index.product.price}</td>
                                <td class="border border-gray-300 p-5">{index.qty}</td>
                                <td class="border border-gray-300 p-5">{index.product.price * index.qty}</td>
                            </tr>
                        ))
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <th>Total:</th>
                        <th>{total}</th>
                        <button className='bg-blue-400 text-white p-2 rounded' onClick={()=>{
                            handlePayment(total)
                        }}>Buy Now</button>
                    </tr>
                </tfoot>
                
            </table>
        </div>
    </div>
  )
}

export default Cartview