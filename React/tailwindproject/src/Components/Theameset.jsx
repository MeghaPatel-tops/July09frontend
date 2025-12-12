import React, { useState } from 'react'




function Theameset() {
    const [theam,setTheam]=useState("light")

    const changeTheame = ()=>{
        setTheam(theam=="light"?"dark":"light");
    }
  return (
    <div>
        <button onClick={changeTheame} className='bg-sky-900 p-5' >{theam=="light" ?"Drak":"Light"}</button>
        <div style={{
            backgroundColor:theam=="light" ? "white":"black",
            color: theam=="light"?"black":"white"
        }}>
            <h2>Dynamic Css Example </h2>
            <p>Using state hook change css dynamic</p>
        </div>
    </div>
  )
}

export default Theameset