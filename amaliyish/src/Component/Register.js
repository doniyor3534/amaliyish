import React from 'react'
import { NavLink } from 'react-router-dom'

const Register = () => {
  return (
    <div>
      <form >
             <h3>LogIn</h3>
             <label htmlFor="username">Username</label>
             <input type="text" placeholder='Username' />
             <label htmlFor="password">Password</label>
             <input type="password" placeholder='password' />
             <NavLink to={'/register'}>SignIn </NavLink>
             
             <button>Send</button>
         </form>
    </div>
  )
}

export default Register
