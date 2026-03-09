import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryData } from '../../Redux/Category';
import { addProduct, getProductById, getProductData ,productDeleteByID} from '../../Redux/Product';

function Productindex() {
    const [product,setProduct]= useState({});
    const {catArray} = useSelector((state)=>state.category)
    const dispatch = useDispatch();
    const {promsg,error,isloading,productArray,singleProduct} = useSelector((state)=>state.product)
    const [editid,setEditid]= useState(null);

    
    

    useEffect(()=>{
        dispatch(getCategoryData())
        dispatch(getProductData())
        
    },[promsg])

    const handleChange = (e)=>{
           const {name,value}=e.target;
           setProduct({
               ...product,
               [name]:value
           })
   
       }
   
       const handleUpload = (e)=>{
           console.log(e.target.files);
           
           const file= e.target.files[0]
           if (!file) return;
   
           const reader = new FileReader();
   
            reader.readAsDataURL(file); // Converts to Base64
   
           reader.onloadend = () => { 
           setProduct({
               ...product,
               ['pimage']:reader.result
           })
          
           };
   
       }
        const handleClick= (e)=>{
            e.preventDefault();
                   console.log(product);
                   dispatch(addProduct(product))
                  
           }
    const editProduct = (id)=>{
        setEditid(id)
            dispatch(getProductById(id))
    }

    useEffect(() => {
          if (singleProduct && editid !== null) {
            setProduct(singleProduct);
          }
        }, [singleProduct]);
  return (
    <div>


        
        <form method='post'>
  <div class="space-y-12">
    

    <div class="border-b border-gray-900/10 pb-12 px-12">
      <h2 class="text-base/7 font-semibold text-gray-900">Create New Product</h2>
        {
               isloading && <h3 className='text-3xl text-green-900'>Loading....</h3>
           }
           {
               error && <h3 className='text-3xl text-red-900'>{error}</h3>
           }
           {
               promsg && <h3  className='text-3xl text-green-900'>{promsg}</h3>
           }
      <div class="sm:col-span-3">
          <label for="country" class="block text-sm/6 font-medium text-gray-900">Category</label>
          <div class="mt-2 grid grid-cols-1">
            <select id="country" name="catid" autocomplete="country-name" class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" onChange={handleChange} value={singleProduct ? singleProduct.catid :''}>
              <option value=""></option>
              {
                 catArray && catArray.map((index,i)=>(
                     <option key={i} 
                      
                     >{index.catname}</option>
                 ))
              }
            </select>
            <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4">
              <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
            </svg>
          </div>
        </div>

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <label for="first-name" class="block text-sm/6 font-medium text-gray-900">Product name</label>
          <div class="mt-2">
            <input id="first-name" type="text" name="pname" autocomplete="given-name" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" onChange={handleChange} value={product.pname}/>
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="last-name" class="block text-sm/6 font-medium text-gray-900">Price</label>
          <div class="mt-2">
            <input id="last-name" type="text" name="price" autocomplete="family-name" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" onChange={handleChange}  value={product.price}/>
          </div>
        </div>

        

        <div class="col-span-full">
          <label for="street-address" class="block text-sm/6 font-medium text-gray-900">Description</label>
          <div class="mt-2">
            <input id="street-address" type="text" name="desciption" autocomplete="street-address" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" onChange={handleChange}  value={product.desciption}/>
          </div>
        </div>

        

        

        <div class="sm:col-span-2">
          <label for="postal-code" class="block text-sm/6 font-medium text-gray-900">Image</label>
          <div class="mt-2">
            <input id="postal-code" type="file" name="pimage" autocomplete="postal-code" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" onChange={handleUpload} />
          </div>
        </div>
      </div>
    </div>

   
  </div>

  <div class="mt-6 flex items-center justify-end gap-x-6">
   
    <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleClick}>Save</button>
  </div>


</form>


    <div className=" container mx-auto">
          <h2 className='text-3xl'>Category Data</h2>
              <table class="table-auto border border-collapse w-100">
        <thead>
          <tr>
            <th className='p-5'>Category</th>
            <th className='p-5'>ProductName</th>
            <th className='p-5'>Image</th>
           <th className='p-5'>Price</th>
           <th className='p-5'>Description</th>
           <th colSpan={2}>Action</th>
           
          </tr>
          
        </thead>
        <tbody>
            {
                productArray && productArray.map((index,i)=>(
                    <tr>
                        <td className='p-5'>{index.catid}</td>
                        <td className='p-5'>{index.pname}</td>
                        
                        <td className='p-1'><img src={index.pimage} alt="" height={"50px"}/></td>
                        <td className='p-5'>{index.price}</td>
                        <td className='p-5'>{index.desciption}</td>
                        <td className='p-5'>
                            <button className='bg-red-400 text-white px-5 py-2' onClick={()=>{
                                                alert(index.id)
                                                dispatch(productDeleteByID(index.id))
                                              }}>Delete</button>
                        </td>
                        <td>
                             <button className='bg-green-400 text-white px-5 py-2' onClick={()=>{
                    editProduct(index.id)
                  }}>
                      Edit
                  </button>
                        </td>
                    </tr>
                ))
            }
        </tbody>
        </table>
    </div>

    
    </div>
  )
}

export default Productindex