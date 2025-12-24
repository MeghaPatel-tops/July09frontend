import React, { useContext } from 'react'
import HomeChild from './HomeChild'
import { ThemeContext } from './Theme'

function Home() {
    const  {theme,setTheme}= useContext(ThemeContext);
  return (
    <div style={{
        backgroundColor:theme =="light"?"white":"black",
        color:theme=="light"?"black":"white",
    }}>
        <h2>Home Page</h2>
        <HomeChild/>
    </div>
  )
}

export default Home