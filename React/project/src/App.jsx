import { useState } from 'react'
import './App.css'
import './style.css'
import { Route, Routes } from 'react-router-dom'
import Userindex from './User/Userindex'
import Adminindex from './Admin/Adminindex'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         <Routes>
          {/* Admin routes */}
             <Route path='/admin/*' element={<Adminindex/>}></Route>




            {/* User routes */}
             <Route path='/' element={<Userindex/>}></Route>
         </Routes>
      
          
      
    </>
  )
}

export default App
