
import './topBar.css';

export default function TopBar() {
    const user = true;
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
                    <li className="topItem">{user && "LOGOUT"}</li>
                </ul>
                
                
            </div>
            <div className="right">
                {
                    user ? <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" className="topImg" />
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
