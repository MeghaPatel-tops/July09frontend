import React, { useState } from 'react'

function Counter() {
    const [count,setCount]=useState(0);

    const incre = ()=>{
        setCount(count+1);
    }

    const decre= ()=>{
        setCount(count-1);
    }
  return (
    <div>
        <fieldset>
            <legend>Counter app</legend>
            <button onClick={incre}>+</button>
            {count}
            <button onClick={decre}>-</button>
        </fieldset>
    </div>
  )
}

export default Counter