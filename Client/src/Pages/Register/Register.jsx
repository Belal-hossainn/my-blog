import React from 'react'
import './Register.css'

export default function Register() {
    return (
        <div className='register'>
           <div className="registerWrapper">
           <h1 className="registerTitle">Register</h1>
            <form className="registerForm">
            <label>Username</label>
                <input type="text" name="name" placeholder='Enter your name...' id="" />
                <label>Email</label>
                <input type="email" name="email" placeholder='Enter your email...' id="" />
                <label>Password</label>
                <input type="password" name="password" placeholder='Enter your password...' id="" />
                <button type="submit" className="registerBtn">Register</button>
            </form>
            <span>Already have an account?</span>
            <button className="loginBtn">Login</button>
           </div>
           
        </div>
    )
}
