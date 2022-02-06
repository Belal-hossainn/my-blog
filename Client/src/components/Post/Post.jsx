import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';

export default function Post({post}) {
    console.log(post)

   const PF = "https://myblogsserver.herokuapp.com/images/"
    return (
        <div className='post'>
            {post.photo && (<img className='postImg' src={PF + post.photo} alt="" />)}
            <div className="postInfo">
                <div className="postCats">
                    {post.categories.map((c)=>(<span className="postCat">{c}</span>))}
                </div>
                <Link to={`/post/${post._id}`} className='link'><span className="postTitle">{post.title}</span></Link>
                
                <hr/>
                
            </div>
            <div className='postSub'>
            <i class="fas fa-edit"><Link to={`/?user=${post.username}`} className='link'> 
                <span className="author"><b>{post.username}</b></span>
                </Link></i>
                
                <span className="postTime">{new Date(post.createdAt).toDateString()}</span>
                </div>
            <div className="description">
              {post.description}
            </div>
            <Link to={`/post/${post._id}`} className='more-btn'><span>read more...</span></Link>
        </div>
    )
}
