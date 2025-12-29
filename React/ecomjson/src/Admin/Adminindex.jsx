import React from 'react'
import Adminnavbar from './Adminnavbar'
import { Outlet, Route, Routes } from 'react-router-dom'
import Product from './Product'

function Adminindex() {
  return (
    <div>
        <div className="container-fluid">
            <Adminnavbar />
            <Outlet />
        </div>
    </div>
  )
}

export default Adminindex