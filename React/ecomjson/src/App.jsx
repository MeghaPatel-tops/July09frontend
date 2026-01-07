import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Adminindex from './Admin/Adminindex'
import Product from './Admin/Product'
import Productedit from './Admin/Productedit'
import Userindex from './Users/Userindex'
import Productadd from './Admin/Productadd'
import Login from './Users/Login'
import Registration from './Users/Registration'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Routes>
          {/* ===================Admin routes============================ */}
            <Route path='admin' element={<Adminindex />}>
             
                <Route path='product'  element={<Product/>}></Route>
                <Route path='productedit/:pid' element={<Productedit />}></Route>
                <Route path='productadd' element={ <Productadd/>}></Route>
           
            </Route>


          {/* ======================User Routes===============================   */}
          <Route path='' element={<Userindex />}>
              
          </Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/registration' element={<Registration/>}></Route>
        </Routes>
    </>
  )
}

export default App
