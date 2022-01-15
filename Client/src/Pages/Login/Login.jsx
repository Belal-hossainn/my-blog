import axios from 'axios';
import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './Login.css';

export default function Login() {
    const userRef =useRef();
    const passRef = useRef();
    const {dispatch, isFetching} = useContext(Context);
    

    const handleSubmit = async (e)=>{
        e.preventDefault();
        dispatch({type: "LOGIN_START"});
        try{
            const res = await axios.post("/auth/login", {
                username: userRef.current.value,
                password: passRef.current.value
            });
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data});
        }catch (err){
            dispatch({type: "LOGIN_FAILURE"});
        }
    };

    return (
        <div className='login'>
           <div className="loginWrapper">
           <h1 className="loginTitle">Login</h1>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" name="username" placeholder='type your username...' ref={userRef} />
                <label>Password</label>
                <input type="password" name="password" ref={passRef} />
                <button type="submit" className="loginButton" disabled={isFetching}>Login</button>
            </form>
           </div>
           <button className="registerBtn"><Link to= "/register" className='link'>Register</Link></button>
        </div>
    )
}
