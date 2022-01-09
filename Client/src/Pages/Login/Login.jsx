import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

export default function Login() {
    return (
        <div className='login'>
           <div className="loginWrapper">
           <h1 className="loginTitle">Login</h1>
            <form className="loginForm">
                <label>Email</label>
                <input type="email" name="email" id="" />
                <label>Password</label>
                <input type="password" name="password" id="" />
                <button type="submit" className="loginBtn">Login</button>
            </form>
           </div>
           <button className="registerBtn"><Link to= "/register">Register</Link></button>
        </div>
    )
}
