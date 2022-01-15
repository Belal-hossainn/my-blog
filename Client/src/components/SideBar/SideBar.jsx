import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import sideBarImg from '../../Assets/siedbarimg.jpg';
import './SideBar.css';

export default function SideBar() {
    const [cats, setCats] = useState([]);

    useEffect(()=>{
        const getCats = async ()=> {
            const res = await axios.get("/categories");
            setCats(res.data);
        }
        getCats();
    }, [])
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
                {cats.map((c)=> (<Link to={`/?cat=${c.name}`} className='link'>
                <li className="SBListItem">{c.name}</li>
                </Link>))}   
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
