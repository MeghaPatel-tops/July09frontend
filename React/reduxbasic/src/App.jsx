import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { store } from './feature/store'
import { decrement, increment } from './feature/CounterSlice';


function App() {
  const dispatch = useDispatch();
  const count=useSelector((state)=>state.counter.value)
  console.log(count);
  
    const incre = ()=>{
        dispatch(increment())
    }

    const decre = ()=>{
         dispatch(decrement())
    }

  return (
    <>
      
     
      <div className="card">
        <button  onClick={incre}>
          +
        </button>
        <h1>Count: {count}</h1>
        <button onClick={decre}>
          -
        </button>
      </div>
    </>
  )
}

export default App
