import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Adminindex from './Admin/Adminindex'
import Product from './Admin/Product'
import Productedit from './Admin/Productedit'
import Userindex from './Users/Userindex'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Routes>
          {/* ===================Admin routes============================ */}
            <Route path='admin' element={<Adminindex />}>
             
                <Route path='product'  element={<Product/>}></Route>
                <Route path='productedit' element={<Productedit />}></Route>
           
            </Route>


          {/* ======================User Routes===============================   */}
          <Route path='' element={<Userindex />}>
              
          </Route>
        </Routes>
    </>
  )
}

export default App
