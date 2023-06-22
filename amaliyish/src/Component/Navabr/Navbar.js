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
                <NavLink to="/destination">Destination</NavLink>
            </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
        </ul>
        <div className="navbtns">
            <button className="registr">Register</button>
            <button className="login">Login</button>
        </div>
    </nav>
  )
}

export default Navbar
