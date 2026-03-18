import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryData } from '../Redux/Category';
import { ProductFilter } from '../Context/FilterProduct';

function Cat() {
      const {catArray}=useSelector((state)=>state.category);
      const dispatch = useDispatch();

      const {filterCat,setFilterCat}= useContext(ProductFilter)
    useEffect(()=>{
        dispatch(getCategoryData())
    },[])
  
    const productFilter = (id)=>{
       setFilterCat(id)
    }

  return (
    <div>
         
            <div class="flex h-full space-x-8">
              <div class="group/popover flex">
                
                {
                    catArray&& catArray.map((index,i)=>(
                        
                            <button className='flex items-center text-sm font-medium text-gray-700 m-5 hover:text-gray-800' onClick={()=>{
                              productFilter(index.catname)
                            }}>{index.catname}</button>     
                    ))
                }
               <button className='flex items-center text-sm font-medium text-gray-700 m-5 hover:text-gray-800' onClick={()=>{
                              productFilter('all')
                            }}>All</button> 
            </div>
            </div>
        
    </div>
  )
}

export default Cat