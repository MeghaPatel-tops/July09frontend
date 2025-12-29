import { useState ,useContext} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import  './App.css'
import GrandParent from './GrandParent'
import { CompanyContext } from './Company'
import Home from './Home'
import { ThemeProvide ,ThemeContext} from './Theme'
import { Route,Routes } from 'react-router-dom'
import About from './About'
import Service from './Service'
import Navbar from './Templates/Navbar'
import Product from './Product'
import Productadd from './Productadd'

function App() {
  const [count, setCount] = useState(0)
 

  return (
    <>
      {/* <CompanyContext.Provider value={"Tops Technology"}>
            <GrandParent />
      </CompanyContext.Provider> */}
     <ThemeProvide>
      <Navbar />
      <div class="container mx-auto p-4">
             <Routes>
          <Route path='/' element={<Home/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/service' element={<Service />}></Route>
            <Route path='/product' element={<Product />}></Route>
             <Route path='/product/add' element={<Productadd />}></Route>
        </Routes>
      </div>
       
     </ThemeProvide>
    </>
  )
}

export default App
