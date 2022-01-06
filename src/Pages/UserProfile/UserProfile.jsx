import React from 'react'
import SideBar from '../../components/SideBar/SideBar.jsx'
import './UserProfile.css'


export default function UserProfile() {
    return (
        <div className='userContainer'>
            <div className="userWrapper">
                <div className="profileSetTitle">
                    <span className="updateProfile">Update your account</span>
                    <span className="deleteProfile">Delete your account</span>
                </div>
                <form className='userForm'>
                    <label>Profile Picture</label>
                    <div className="profileImg">
                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                        <label htmlFor="fileInput">
                            <i className="far fa-user-circle PPIcon"></i>
                        </label>
                        <input type="file" name="" id="fileInput" className='PPInput' style={{display:'none'}} />
                    </div>
                    <label>Username</label>
                        <input type="text" name="name" placeholder='type username' id="" />
                        <label>Email</label>
                        <input type="email" placeholder='type email' name="email" id="" />
                        <label>Password</label>
                        <input type="password" name="password" placeholder='type password' id="" />
                        <button type='submit' className='updateBtn'>Update</button>
                </form>
            </div>
            <SideBar/>
        </div>
    )
}
