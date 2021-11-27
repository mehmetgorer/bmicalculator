import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    
    <nav className="navbar" >
      
      <a className="brand"href="/">BMI</a>
      <ul>
        <li className="hover-link" >
          <Link to="/" >BMI Calculate</Link>
        </li>
        <li className="hover-link" >
          <Link to="/about" >What's The BMI ?</Link>
        </li>
        <li className="hover-link" >
          <Link to="/calculations" >My Calculations</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
