
import { useContext, useState } from 'react';
import { Context } from '../../context/Context';
import './topBar.css';

export default function TopBar() {
    const [click, setClick] = useState(false);
    const {user, dispatch} = useContext(Context);
    const PF = "https://myblogsserver.herokuapp.com/images/";

    const handleClick = () => setClick(!click);

    const handleLogout = ()=>{
        dispatch({type: "LOGOUT"})
    }
    return (
        <div className='topBar'>
            <div className="nav-logo">
                <h2 className='logo'><a className='pageLink' href="/home">Blog.</a></h2>
               
            </div>

            <div className={click ? 'dropdown-menu' : 'nav-menu'}>
            
                    <ul className="topBarList">
                        <li  className="topItem"><a className='pageLink' href="/home">HOME</a></li>
                        <li  className="topItem"><a className='pageLink' href="/about">ABOUT</a></li>
                        {/* <li className="topItem"><a className='pageLink'  href="/contact">CONTACT</a></li> */}
                        <li  className="topItem"><a className='pageLink' href="/write">WRITE</a></li>
                        {
                            user && <li  className="topItem" onClick={handleLogout}>LOGOUT</li>
                        }
                    
                
                {
                    user ? <a href="/userProfile">{user.profilePic ? <img src={PF+user.profilePic} alt="" className="topImg" /> : <img src='https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1214428300?k=20&m=1214428300&s=170667a&w=0&h=NPyJe8rXdOnLZDSSCdLvLWOtIeC9HjbWFIx8wg5nIks=' alt="" className="topImg" />} </a>
                     : <ul className="topBarList">
                    <li  className="topItem"><a className='pageLink' href="/login">LOGIN</a></li>
                    <li  className="topItem"><a  className='pageLink' href="/register">REGISTER</a></li>   
                </ul>
                }
                </ul>
            </div>
            <div className='nav-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times ' : 'fas fa-bars'}></i>
                </div>
        </div>
    )
}
