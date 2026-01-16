import { collection, onSnapshot, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../Firebase/Firebase'

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

    useEffect(()=>{
        getProduct();
       
        
    },[])
  return (
    <div>Prooductindex</div>
  )
}

export default Prooductindex