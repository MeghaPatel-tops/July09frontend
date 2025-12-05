import React from 'react'
import './style.css'

function CssExample() {
  return (
    <>
    <div>
        <h1 style={{color:"blue",backgroundColor:"gray",textAlign:"center"}}>Welcome To App</h1>
    </div>
    <div className="navbar">
          <label className='logo'>ReactM</label>
          <ul>
            <li><a href="">home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Gallary</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Feedback</a></li>
          </ul>
          
    </div>
    </>
  )
}

export default CssExample