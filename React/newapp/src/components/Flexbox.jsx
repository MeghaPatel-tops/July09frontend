import React from 'react'
import style from './Flexbox.module.css'

function Flexbox() {
    const Item=[];
  return (
    <div>
        <h1>Flexbox using modular css</h1>
        <div  className={style.main} >
            {[...Array(10)].map((_, i) => (
          <div key={i} className={style.box}></div>
        ))}
        </div>
    </div>
  )
}

export default Flexbox