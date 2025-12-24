import React, { useContext } from 'react'
import { ThemeContext } from './Theme';

function HomeChild() {
  const {theme,setTheme}= useContext(ThemeContext)
  console.log("theme=",theme);

  const changeTheme = ()=>{
       setTheme(
          theme=="light"?"dark":"light"
       )
  }
  
  return (
    <div>
      <button onClick={changeTheme}>{theme=="light" ? "Dark":"Light"}</button>
        <h2>My Blog</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, eum officia mollitia impedit a sunt facere? Vel ut, aperiam molestias labore aut autem tempora rem, nesciunt error voluptate, est minima.</p>
    </div>
  )
}

export default HomeChild