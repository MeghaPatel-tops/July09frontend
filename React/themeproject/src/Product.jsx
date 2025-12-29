import React from 'react'
import './App.css'
import { NavLink } from 'react-router-dom'

function Product() {
  return (
    <div>
        <h1>Product Index</h1>
      
     <NavLink to={'/product/add'} className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">Add new</NavLink>
       <table class="border-collapse border border-slate-400 border-spacing-7">
  <thead>
    <tr>
      <th class="border border-slate-300 ...">State</th>
      <th class="border border-slate-300 ...">City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-slate-300 ...">Indiana</td>
      <td class="border border-slate-300 ...">Indianapolis</td>
    </tr>
    <tr>
      <td class="border border-slate-300 ...">Ohio</td>
      <td class="border border-slate-300 ...">Columbus</td>
    </tr>
    <tr>
      <td class="border border-slate-300 ...">Michigan</td>
      <td class="border border-slate-300 ...">Detroit</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Product