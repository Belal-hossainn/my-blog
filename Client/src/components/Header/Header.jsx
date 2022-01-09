import React from 'react'
import headerImg from '../../Assets/header.jpg'
import './Header.css'

export default function Header() {
    return (
        <div className='header'>
            <div className="header-title">
                <span className="header-title-sm">Personal</span>
                <span className="header-title-lg">Blog</span>
            </div>
            <img className='header-img' src={headerImg} alt="" />
        </div>
    )
}
