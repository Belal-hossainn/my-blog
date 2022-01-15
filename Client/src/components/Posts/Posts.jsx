import React from 'react'
import Post from '../Post/Post'
import './Posts.css'

export default function Posts({posts}) {
    return (
        <div className='posts-container'>
            {posts.map((p)=><Post post={p}/>)} 
        </div>
    )
}
