// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { Link, NavLink } from 'react-router-dom'
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/login.css'


function Login() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="wrapper">
         <div className="title">
            Login Form
         </div>
         <form action="#">
            <div className="field">
               <input type="text" required/>
               <label>Email Address</label>
            </div>
            <div className="field">
               <input type="password" required/>
               <label>Password</label>
            </div>
            <div className="content">
               <div className="checkbox">
                  <input type="checkbox" id="remember-me"/>
                  <label htmlFor="remember-me">Remember me</label>
               </div>
               <div className="pass-link">
                  <a href="#">Forgot password?</a>
               </div>
            </div>
            <div className="field">
               <input type="submit" value="Login"/>
            </div>
            <div className="signup-link">
               Not a member? <Link to='/register'>Signup now</Link>
            </div>
         </form>
      </div>
    </>
  )
}

export default Login
