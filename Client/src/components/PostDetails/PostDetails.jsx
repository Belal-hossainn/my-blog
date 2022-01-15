import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './PostDetails.css';

export default function PostDetails() {
    const location = useLocation();
    const path = location.pathname.split('/')[2];
    const [post, setPost] = useState({});

    useEffect(()=>{
        const getPost = async ()=>{
            const res = await axios.get("/posts/" + path);
            setPost(res.data)
        };
        getPost();
    }, [path])

    return (
        <div className='post-detail'>
           <div className="Detail-container">
               {post.photo &&
               <img src={post.photo} alt="" className="coverImg" />}
               <div className="PostEdit">
                   <i className="editIcon far fa-edit"></i>
                   <i className="deleteIcon far fa-trash-alt"></i>
               </div>
               <h1 className="post-title"> {post.title}</h1>
               
            <div className="post-info">
                <Link to={`/?user=${post.username}`} className='link'> 
                <span className="author"><b>{post.username}</b></span>
                </Link>
               
                <span className="updateTime"> {new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="post-description">{post.description}</p>
           </div>
        </div>
    )
}
