import axios from 'axios';
import React, { useContext, useState } from 'react';
import SideBar from '../../components/SideBar/SideBar.jsx';
import { Context } from '../../context/Context.js';
import './UserProfile.css';


export default function UserProfile() {
    const [file, setFile] = useState(null);
    const [username, setUsername] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");
    const [success, setSuccess] = useState(false);
    const {user, dispatch} = useContext(Context);
    const PF = "https://myblogsserver.herokuapp.com/images/";

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type: "UPDATE_START"});
        const updatedUser = {
            userId: user._id,
            username,
            email,
            password    
        };
        if(file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updatedUser.profilePic = filename;
            try{
                await axios.post("https://myblogsserver.herokuapp.com/api/upload", data)
            }catch (err) {

            }
        }
        try{
            const res = await axios.put("https://myblogsserver.herokuapp.com/api/users/" + user._id, updatedUser);
            setSuccess(true);
            dispatch({type: "UPDATE_SUCCESS", payload: res.data});
        }catch (err){
            dispatch({type: "UPDATE_FAILURE"});
        };
    };
    return (
        <div className='userContainer'>
            <div className="userWrapper">
                <div className="profileSetTitle">
                    <span className="updateProfile">Update your account</span>
                    <span className="deleteProfile">Delete your account</span>
                </div>
                <form className='userForm' onSubmit={handleSubmit}>
                    <label>Profile Picture</label>
                    <div className="profileImg">
                        {user.profilePic ? <img src={file? URL.createObjectURL(file) : PF + user.profilePic} alt="" /> : <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />}
                        <label htmlFor="fileInput">
                            <i className="far fa-user-circle PPIcon"></i>
                        </label>
                        <input type="file" name="" id="fileInput" className='PPInput' style={{display:'none'}} onChange={(e)=> setFile(e.target.files[0])}/>
                    </div>
                    <label>Username</label>
                        <input type="text" name="name" placeholder={user.username} onChange={(e)=> setUsername(e.target.value)} />
                        <label>Email</label>
                        <input type="email" placeholder={user.email} name="email" id="" onChange={(e)=> setEmail(e.target.value)} />
                        <label>Password</label>
                        <input type="password" name="password" placeholder='type password' id="" onChange={(e)=> setPassword(e.target.value)}/>
                        <button type='submit' className='updateBtn'>Update</button>
                        {success && <span style={{color: 'green', marginTop: '6px', textAlign: 'center'}}>Profile updated successfully...</span>}
                </form>
            </div>
            <SideBar/>
        </div>
    )
}
