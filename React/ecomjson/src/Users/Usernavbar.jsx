import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Usernavbar() {
  const userLogged = JSON.parse(localStorage.getItem('ecom-user'));
  const navigate=useNavigate();

  const logout =()=>{
           localStorage.removeItem('ecom-user');
           navigate('/')
  }
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Ecom</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
      </ul>
      <span className="navbar-text">

        {
                (userLogged ) ? 
                <>
                <label htmlFor="">welcome  {userLogged.username}</label>
                <button className="btn btn-default" onClick={logout}>Logout</button>
                </>
                : <NavLink className="btn btn-default" to={"/login"}>Login</NavLink>

        }
          
      </span>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Usernavbar