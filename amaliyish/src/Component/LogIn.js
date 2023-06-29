import React from 'react';
import {NavLink} from 'react-router-dom'

const LogIn = () => {
  return (
    <div className='login'>
             <h1>LogIn</h1>
         <form >
             <label htmlFor="username">Username</label>
             <input type="text" placeholder='Username' />
             <label htmlFor="password">Password</label>
             <input type="password" placeholder='password' />
             <button>Send</button>
             
             <NavLink to={'/register'}>SignIn </NavLink>
         </form>
    </div>
  )
}

export default LogIn
