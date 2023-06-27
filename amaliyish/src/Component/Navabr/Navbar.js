import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <NavLink to='/' className='logo' >Travel Makkah</NavLink>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
        </ul>
        <div className="navbtns">
            <NavLink to={"/register"} className="registr">Register</NavLink>
            <NavLink to={"/login"} className="login">Login</NavLink>
        </div>
    </nav>
  )
}

export default Navbar
