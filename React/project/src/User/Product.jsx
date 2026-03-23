import React, { useContext, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCartProduct, getProductData } from '../Redux/Product';
import { ProductFilter } from '../Context/FilterProduct';
import { log } from 'firebase/firestore/pipelines';
import { NavLink, useNavigate } from 'react-router-dom';

function Product() {
    const user = JSON.parse(localStorage.getItem('users'));

    const { productArray,isloading,error,promsg}= useSelector((state)=>state.product)
    const dispatch = useDispatch();
    const {filterCat,setFilterCat}= useContext(ProductFilter) 
    const navigate = useNavigate();
    
    

    const addincart = (pid)=>{
          if(!user){
             navigate('/login')
          }
          else{
               const cartObj={
                   userId:user.id,
                   pid:pid,
                   qty:1
               }
               dispatch(addToCartProduct(cartObj))
               setTimeout(()=>{
                   alert(promsg)
               },2000)
          }
    }
     
    useEffect(()=>{
        dispatch(getProductData())
        
    },[])

  

    const fileterProductsArray =useMemo(()=>{
         console.log(filterCat);

                if (filterCat !== 'all') {
                    return productArray.filter((item) => item.catid === filterCat);
                } else {
                    return productArray;
                }


    },[filterCat,productArray])
  return (
    <div>
        <div class="bg-white">
           
            {
                isloading && <p className='text-2xl'>Loading.....</p>
            }
           
  <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 class="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

    <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
    
      {
           fileterProductsArray && fileterProductsArray.map((index,i)=>(
        <div class="group relative  border rounded p-4">
        <img src={index.pimage} alt="Front of men&#039;s Basic Tee in black." class="aspect-square w-full rounded-md bg-gray-200 object-fit group-hover:opacity-75  lg:h-50" />
        <div class="mt-4 flex justify-between ">
          <div>
            <h3 class="text-sm text-gray-700">
              
               
                {index.pname.toUpperCase()}
             
            </h3>
            <p class="mt-1 text-sm text-gray-500">{index.desciption}</p>
           
          </div>
          <p class="text-sm font-medium text-gray-900">{index.price}</p>
        </div>
        
         <button className="bg-blue-400 px-2 rounded text-sm text-white" onClick={()=>{
            addincart(index.id)
         }}>AddToCart</button>
      </div>
           ))
      }
    </div>
  </div>
</div>

    </div>
  )
}

export default Product