import { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { store } from './feature/store'
import { decrement, increment } from './feature/CounterSlice';
import { addProduct, delProductThunk, getProduct } from './feature/ProductSlice';


function App() {
  const [singleProduct,setSingleProduct]=useState({});
  const dispatch = useDispatch();
  const count=useSelector((state)=>state.counter.value)
  const {products,isLoading,error,msg} = useSelector((state)=>state.products);

  

  const handleChange = (e)=>{
    const {name,value}=e.target;
       setSingleProduct({
          ...singleProduct,
          [name]:value
       })
  }

  const handleClick= ()=>{
        console.log(singleProduct);
        dispatch(addProduct(singleProduct))
        setSingleProduct({})
  }

  const delProduct = (pid)=>{
        dispatch(delProductThunk(pid))
  }

  useEffect(()=>{
      dispatch(getProduct())
  },[msg,dispatch])
  

  
  
  
    const incre = ()=>{
        dispatch(increment())
    }

    const decre = ()=>{
         dispatch(decrement())
    }

  return (
    <>
      
     
      <div className="card">
        {/* <button  onClick={incre}>
          +
        </button>
        <h1>Count: {count}</h1>
        <button onClick={decre}>
          -
        </button> */}
        <fieldset >
             <legend>Product Add</legend>
             <label htmlFor="">Enter Product Name</label>
             <input type="text" name="pname" id="" onChange={handleChange} value={singleProduct.pname ?? ""}/>
             <br />
              <label htmlFor="">Enter Product Price</label>
             <input type="text" name="price" id="" onChange={handleChange} value={singleProduct.price ??""} />
             <br />
              <label htmlFor="">Enter Product Description</label>
             <input type="text" name="descr" id="" onChange={handleChange} value={singleProduct.descr??""}/>
             <br />
             <input type="button" value="Add" onClick={handleClick} />
        </fieldset>
         {
                   (isLoading==true) ? <span>Loading......</span> :""
              }
              {
                  error && <p>{error}</p>
              }
              {
                msg  && <h1>{msg}</h1>
              }
        <table className='mt-5'>
             <thead>
                <tr>
                <th>SrNo</th>
                 <th>ProductName</th>
                 <th>Price</th>
                 <th>Desription</th></tr>
             </thead>
             <tbody>
             
                   {
                     products && products.map((index,i)=>(
                          <tr key={i}>
                            <td>{i+1}</td>
                            <td>{index.pname}</td>
                            <td>{index.price}</td>
                            <td>{index.descr}</td>
                            <td><button onClick={()=>delProduct(index.id)}>DELETE</button></td>
                          </tr>
                     ))
                   }
             </tbody>
        </table>
      </div>
    </>
  )
}

export default App
