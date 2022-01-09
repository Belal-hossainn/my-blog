import React from 'react'
import PostDetails from '../../components/PostDetails/PostDetails'
import SideBar from '../../components/SideBar/SideBar.jsx'
import './Details.css'

export default function Details() {
    return (
        <div className='details'>
            <PostDetails/>
            <SideBar/>
        </div>
    )
}
