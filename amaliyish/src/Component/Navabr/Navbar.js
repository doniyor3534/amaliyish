import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import {MenuOutlined} from '@ant-design/icons'

const Navbar = () => {
    const [cluck,setCluch] = useState(true)
    
  return (
    <nav className={cluck?'active':''}>
        <div className="navleft">
        <NavLink to='/' className='logo' >Travel Makkah</NavLink>
         <button className='menu' onClick={()=>setCluch(!cluck)} ><MenuOutlined /></button>
        </div>
        <ul>
            <li>
                <NavLink to="/" onClick={()=>setCluch(!cluck)}>Home</NavLink>
            </li>
            <li>
                <NavLink to="/about" onClick={()=>setCluch(!cluck)}>About</NavLink>
            </li>
                <li>
                    <NavLink to="/contact" onClick={()=>setCluch(!cluck)}>Contact</NavLink>
                </li>
        </ul>
        <div className="navbtns">
            <NavLink to={"/register"} onClick={()=>setCluch(!cluck)} className="registr">Register</NavLink>
            <NavLink to={"/login"} onClick={()=>setCluch(!cluck)} className="login">Login</NavLink>
        </div>
    </nav>
  )
}

export default Navbar
