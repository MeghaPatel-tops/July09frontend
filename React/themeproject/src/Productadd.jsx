import React from 'react'
import { useNavigate } from 'react-router-dom'

function Productadd() {
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate('/product')
    }
  return (
    <div>Productadd

        <button onClick={handleClick} className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">
            Submit
        </button>
    </div>
  )
}

export default Productadd