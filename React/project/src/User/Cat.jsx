import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryData } from '../Redux/Category';

function Cat() {
      const {catArray}=useSelector((state)=>state.category);
      const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getCategoryData())
    },[])
  
  return (
    <div>
         
            <div class="flex h-full space-x-8">
              <div class="group/popover flex">
                
                {
                    catArray&& catArray.map((index,i)=>(
                        
                            <button className='flex items-center text-sm font-medium text-gray-700 m-5 hover:text-gray-800'>{index.catname}</button>
                           
                    ))
                }
              <a href="#" class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Company</a>
              <a href="#" class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Stores</a>
            </div>
            </div>
        
    </div>
  )
}

export default Cat