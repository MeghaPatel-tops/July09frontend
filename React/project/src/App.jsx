import { useState } from 'react'
import './App.css'
import './style.css'
import { Route, Routes } from 'react-router-dom'
import Userindex from './User/Userindex'
import Adminindex from './Admin/Adminindex'
import Login from './User/Login'
import Reg from './User/Reg'
import Cat from './User/Cat'
import { ProductFilterProvider } from './Context/FilterProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ProductFilterProvider>
         <Routes>
          {/* Admin routes */}
             <Route path='/admin/*' element={<Adminindex/>}></Route>




            {/* User routes */}
            

             
                     <Route path='/' element={<Userindex/>}></Route>
             <Route path='/login' element={<Login/>}></Route>
              <Route path='/registration' element={<Reg/>}></Route>
              <Route path='/test' element={<Cat/>}></Route>
              
         </Routes>
      
          </ProductFilterProvider>
      
    </>
  )
}

export default App
