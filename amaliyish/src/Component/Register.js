import React from 'react'
import { NavLink } from 'react-router-dom'

const Register = () => {
  return (
    <div className='registr'>
             <h1>Register</h1>
      <form >
             <label htmlFor="username">Username</label>
             <input type="text"id='username' placeholder='Username' />
             <label htmlFor="email">Email</label>
             <input type="email" id='email' placeholder='email' />
             <label htmlFor="password">Password</label>
             <input type="password" id='password' placeholder='password' />
             <label htmlFor="password2">Password</label>
             <input type="password" id='password2' placeholder='password' />
             <button>Send</button>
             <NavLink to={'/login'}>SignIn </NavLink> 
             
            
         </form>
    </div>
  )
}

export default Register
