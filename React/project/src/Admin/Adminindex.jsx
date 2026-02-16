import React from 'react'
import Adminnav from './Partials/Adminnav'
import Adminfoot from './Partials/Adminfoot'
import { Route,Routes } from 'react-router-dom'
import Categoryindex from './Category/Categoryindex'

function Adminindex() {
  return (
    <div>
      <Adminnav />
      <div className="container-xl bg-gray-200" >
          <Routes>
               <Route path='category' element={<Categoryindex />}></Route>
          </Routes>

      </div>
   
      <Adminfoot/>
     </div>
  )
}

export default Adminindex