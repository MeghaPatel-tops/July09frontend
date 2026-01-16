import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { db } from './Firebase/Firebase'
import { addDoc, collection } from 'firebase/firestore'
import { Route,Routes } from 'react-router-dom'
import Prooductindex from './Product/Prooductindex'
import Prouctcreate from './Product/Prouctcreate'



function App() {


  return (
    <>
        <Routes>
          <Route path='/product' element={<Prooductindex />}></Route>
          <Route path='/productcreate' element={<Prouctcreate/>}></Route>
        </Routes>
         
    </>
  )
}

export default App
