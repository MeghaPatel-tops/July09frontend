import React, { useEffect, useState } from 'react'

function Product() {

    const [counter,setCounter]=useState(0);
    const [productArray,setProductArray]=useState([]);

    const getProduct = async()=>{
        try {
            let res = await fetch('https://fakestoreapi.com/products');
            let Products = await res.json();
            console.log(Products);
            setProductArray(Products)
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        console.log("use effect hook called");
        getProduct();
        // const timer = setInterval(()=>{
        //     console.log("set time interval");
            
        // },1000)
        //  return () => {
        //     clearInterval(timer);
        // };
        
    },[])

    // useEffect(()=>{
    //     console.log("subodh late by 1 hr");
        
    // },[counter])

    const incre = ()=>{
            setCounter(counter+1)
    }
    const decre=()=>{
            setCounter(counter-1)
    }
  return (
    <div>Product

        <p>Qty: 
            <button type='button' style={{padding:"20px",backgroundColor:"gray"}} onClick={incre}>+</button>
            {counter} 
            <button type='button' style={{padding:"20px",backgroundColor:"gray"}} onClick={decre}>-</button></p>

            <ul>
                {
                    productArray.map((index,i)=>(
                        <li key={i}>{index.title}</li>
                    ))
                }
            </ul>
    </div>
  )
}

export default Product