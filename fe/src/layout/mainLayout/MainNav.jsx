import React from 'react'
import { Outlet, Link } from "react-router-dom";
import "./MainNav.scss"
function MainNav() {
  return (
    <div>
   <nav className='nav'>
       <div className="logo">Pulse <span>.</span></div>
        <ul className='items'>
          <li>
            <Link to="/" className='item'>Home</Link>
          </li>
          <li>
            <Link to="/" className='item'>About us </Link>
          </li>
          <li>
            <Link to="/" className='item'>Restaurant  </Link>
          </li>
          <li>
            <Link to="/" className='item'>News  </Link>
          </li>
          <li>
            <Link to="/" className='item'>Contact </Link>
          </li>
          <li>
            <Link to="/admin" className='item'>admin</Link>
          </li>
        
        </ul>
        <div className="contact">Reservations  652-345 3222 11</div>
      </nav>
    </div>
  )
}

export default MainNav
