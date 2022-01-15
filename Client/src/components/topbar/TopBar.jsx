
import { useContext } from 'react';
import { Context } from '../../context/Context';
import './topBar.css';

export default function TopBar() {
    const {user, dispatch} = useContext(Context);

    const handleLogout = ()=>{
        dispatch({type: "LOGOUT"})
    }
    return (
        <div className='topBar'>
            <div className="left">
            <i class=" topIcon fab fa-facebook-square"></i>
            <i class="topIcon fab fa-medium"></i>
            <i class="topIcon fab fa-twitter-square"></i>
            <i class="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="center">
                <ul className="topBarList">
                    <li className="topItem"><a className='pageLink' href="/home">HOME</a></li>
                    <li className="topItem"><a className='pageLink' href="/about">ABOUT</a></li>
                    <li className="topItem"><a className='pageLink'  href="/contact">CONTACT</a></li>
                    <li className="topItem"><a className='pageLink' href="/write">WRITE</a></li>
                    <li className="topItem" onClick={handleLogout}>{user && "LOGOUT"}</li>
                </ul>
                
                
            </div>
            <div className="right">
                {
                    user ? ( user.profilePic ? <img src={user.profilePic} alt="" className="topImg" /> : <img src='https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1214428300?k=20&m=1214428300&s=170667a&w=0&h=NPyJe8rXdOnLZDSSCdLvLWOtIeC9HjbWFIx8wg5nIks=' alt="" className="topImg" /> )
                     : <ul className="topBarList">
                    <li className="topItem"><a className='pageLink' href="/login">LOGIN</a></li>
                    <li className="topItem"><a className='pageLink' href="/register">REGISTER</a></li>   
                </ul>
                }
                <i class=" searchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
