
import './topBar.css'

export default function TopBar() {
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
                    <li className="topItem">HOME</li>
                    <li className="topItem">ABOUT</li>
                    <li className="topItem">CONTACT</li>
                    <li className="topItem">WRITE</li>
                    <li className="topItem">LOGOUT</li>
                </ul>
            </div>
            <div className="right">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" className="topImg" />
                <i class=" searchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
