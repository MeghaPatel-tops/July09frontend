import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCat, catDeleteByID, getCategoryById, getCategoryData, updateCategory } from '../../Redux/Category';
import { log } from 'firebase/firestore/pipelines';

function Categoryindex() {

    const [catdata,setCatData] = useState({});
    const {isloading,error,catmsg,catArray,singleCat}=useSelector((state)=>state.category);
    const dispatch = useDispatch();
    const [editid,setEditid]=useState(null);

    const handleChange = (e)=>{
        const {name,value}=e.target;
        setCatData({
            ...catdata,
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
        setCatData({
            ...catdata,
            ['catimg']:reader.result
        })
       
        };

    }

    const handleClick= ()=>{
            console.log(catdata);
            dispatch(addCat(catdata))
    }

    useEffect(()=>{
         dispatch(getCategoryData());
    },[catmsg])

    const editCat = (eid)=>{
          setEditid(eid);
          dispatch(getCategoryById(eid));
          
          
    }
    useEffect(() => {
      if (singleCat && editid !== null) {
        setCatData(singleCat);
      }
    }, [singleCat]);

    const handleUpdate = ()=>{
         console.log("test")
          dispatch(updateCategory({id:editid,proObj:catdata}));
    }
        
  return (
    <div>

        <div className="container mx-auto my-auto mt-8 ">
           
           {
               isloading && <h3>Loading....</h3>
           }
           {
               error && <h3>{error}</h3>
           }
           {
               catmsg && <h3>{catmsg}</h3>
           }

            <form>
  <div class="space-y-12">
   

    <div class="border-b border-gray-900/10 pb-12">
      <h2 class="text-base/7 font-semibold text-gray-900">Enter Category Details</h2>

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <label for="first-name" class="block text-sm/6 font-medium text-gray-900">Category name</label>
          <div class="mt-2">
            <input id="first-name" type="text" name="catname" autocomplete="given-name" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" onChange={handleChange}  value={catdata?.catname || ''}/>
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="last-name" class="block text-sm/6 font-medium text-gray-900">Image</label>
          <div class="mt-2">
            <input id="last-name" type="file" name="catimg" autocomplete="family-name" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" onChange={handleUpload} />
          </div>

          
        </div>

  
      </div>
    </div>

   
  </div>

  <div class="mt-6 flex items-center justify-end gap-x-6">
     {

        (editid != null) ?  <button type="button" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleUpdate}>Update</button>
        :
         <button type="button" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleClick}>Save</button>

     } 
   
  </div>
</form>
        </div>

         <div className=" container mx-auto">
          <h2 className='text-3xl'>Category Data</h2>
              <table class="table-auto border border-collapse w-100">
        <thead>
          <tr>
            <th>Category</th>
            <th>Image</th>
            <th colSpan={2}>Action</th>
           
          </tr>
        </thead>
        <tbody>
          {
            catArray && catArray.map((index,i)=>(
               <tr >
                <td className='p-2 text-center m-5'>{index.catname}</td>
                <td className='p-2 text-center m-5'><img src={index.catimg} alt="" height={"100px"} width={"100px"} className='mx-auto'/></td>
                <td>
                  <button className='bg-red-400 text-white px-5 py-2' onClick={()=>{
                    alert(index.id)
                    dispatch(catDeleteByID(index.id))
                  }}>Delete</button>
                </td>
                <td>
                  <button className='bg-green-400 text-white px-5 py-2' onClick={()=>{
                    editCat(index.id)
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

export default Categoryindex