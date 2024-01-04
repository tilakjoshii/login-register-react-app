// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { Link, NavLink } from 'react-router-dom'
import React from 'react';
import {useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import '../assets/css/login.css'


function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/backend/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        // Handle invalid credentials or other errors
        throw new Error(data.message || 'Invalid credentials');
      }

      // Login successful
      console.log(`Successfully logged in user ${email}`);
      navigate("/homePage");
    } catch (error) {
      console.error("Error in loginUser:", error.message);
      window.alert("Something went wrong! Please try again.");
    }
  };
  return (
    <>
      <div className="wrapper">
         <div className="title">
            Login Form
         </div>
         <form  method='post'>
            <div className="field">
                 <input type="text" name='email' required
                    value={email}
                 onChange={(e)=>setEmail(e.target.value)}/>
               <label>Email Address</label>
            </div>
            <div className="field">
                 <input type="password" name='password' required
                    value={password}
                 onChange={(e)=>setPassword(e.target.value)}/>
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
                 <input type="submit" value="Login"
                 onClick={loginUser} />
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
