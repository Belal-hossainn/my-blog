import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

export default function Register() {
    const [username, setUsername] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");
    const [error, setError] = useState(false);

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError(false);
        try{
            const res = await axios.post("/auth/register", {username, email, password});
            res.data && window.location.replace("/login");
        }catch (err){
                setError(true);
        }
        
    }


    return (
        <div className='register'>
           <div className="registerWrapper">
           <h1 className="registerTitle">REGISTER</h1>
            <form className="registerForm" onSubmit={handleSubmit}>
            <label>Username</label>
                <input type="text" name="name" placeholder='Enter your name...' id="" onChange={e=> setUsername(e.target.value)}/>
                <label>Email</label>
                <input type="email" name="email" placeholder='Enter your email...' id="" onChange={e=> setEmail(e.target.value)}/>
                <label>Password</label>
                <input type="password" name="password" placeholder='Enter your password...' id="" onChange={e=> setPassword(e.target.value)}/>
                <button type="submit" className="regBtn">Register</button>
                {error &&  <span style={{color: 'red', marginTop: '10px', marginBottom: '0 px'}}> Something went wrong...</span>}
            </form>
            <span>Already have an account?</span>
            <button className="loginBtn"><Link to="/login" >login</Link></button>
           </div>
           
        </div>
    )
}
