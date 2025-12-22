import React, { useEffect, useRef } from 'react'

function Counter() {
    const count = useRef(0);
    const textRef = useRef();

    useEffect(()=>{
        textRef.current.focus();
        
    })
    const incre = ()=>{
        count.current++;
        console.log("incre=",count.current);
        
    }
    const decre = ()=>{
         count.current--;
          console.log("decre=",count.current);
    }
  return (
    <div>
        <h2>Counter</h2>
        <input type="text" name="" id="" ref={textRef} />
        <br />
         <button onClick={incre}>+</button>
         <h4>{count.current}</h4>
         <button onClick={decre}>-</button>
    </div>
  )
}

export default Counter