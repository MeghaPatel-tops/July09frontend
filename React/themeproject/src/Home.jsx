import React, { useContext } from 'react'
import HomeChild from './HomeChild'
import { ThemeContext } from './Theme'
import Navbar from './Templates/Navbar';

function Home() {
    const  {theme,setTheme}= useContext(ThemeContext);
  return (
   
    <div>
       
        <h2>Home Page</h2>
        <HomeChild/>
    </div>
  )
}

export default Home