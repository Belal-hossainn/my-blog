import React from 'react'
import sideBarImg from '../../Assets/siedbarimg.jpg'
import './SideBar.css'

export default function SideBar() {
    return (
        <div className='sideBar-container'>
            <div className="sideBarItem">
                <span className="sideBarTitle">ABOUT US</span>
                <img src={sideBarImg} alt="" className="sideBarImg" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ad! sdferlfr dsfkldfgrkj</p>
            </div>
            <div className="sideBarItem">
            <span className="sideBarTitle">CATEGORIES</span>
            <ul className='SBList'>
                <li className="SBListItem">Tech</li>
                <li className="SBListItem">Nature</li>
                <li className="SBListItem">History</li>
                <li className="SBListItem">Books</li>
                <li className="SBListItem">Film</li>
                <li className="SBListItem">Music</li>
            </ul>
            </div>
            <div className="sideBarItem">
            <span className="sideBarTitle">FOLLOW ME</span>
            <div className="socialIcon">
                <i class=" SBIcon fab fa-facebook-square"></i>
                <i class="SBIcon fab fa-medium"></i>
                <i class="SBIcon fab fa-twitter-square"></i>
                <i class="SBIcon fab fa-instagram-square"></i>
            </div>

            </div>
        </div>
    )
}
