import React, { useContext, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductData } from '../Redux/Product';
import { ProductFilter } from '../Context/FilterProduct';
import { log } from 'firebase/firestore/pipelines';

function Product() {
    const { productArray,isloading,error}= useSelector((state)=>state.product)
    const dispatch = useDispatch();
    const {filterCat,setFilterCat}= useContext(ProductFilter) 

    console.log(productArray);
    
     
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
        <img src={index.pimage} alt="Front of men&#039;s Basic Tee in black." class="aspect-square w-full rounded-md bg-gray-200 object-fit group-hover:opacity-75 lg:aspect-auto lg:h-50" />
        <div class="mt-4 flex justify-between ">
          <div>
            <h3 class="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" class="absolute inset-0"></span>
                {index.pname.toUpperCase()}
              </a>
            </h3>
            <p class="mt-1 text-sm text-gray-500">{index.desciption}</p>
          </div>
          <p class="text-sm font-medium text-gray-900">{index.price}</p>
        </div>
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