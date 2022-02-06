import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Context } from '../../context/Context';
import './PostDetails.css';

export default function PostDetails() {
    const location = useLocation();
    const path = location.pathname.split('/')[2];
    const [post, setPost] = useState({});
    const PF = "https://myblogsserver.herokuapp.com/images/";
    const {user} = useContext(Context);
    const [title, setTitle] = useState(" ");
    const [description, setDescription] = useState(" ");
    const [updateMode, setUpdateMode] = useState(false)

    useEffect(()=>{
        const getPost = async ()=>{
            const res = await axios.get("https://myblogsserver.herokuapp.com/api/posts/" + path);
            setPost(res.data);
            setTitle(res.data.title);
            setDescription(res.data.description);
        };
        getPost();
    }, [path]);

    const handleDelete = async ()=> {
       try{
        await axios.delete(`https://myblogsserver.herokuapp.com/api/posts/${post._id}`, {
            data: {username: user.username}
        });
        window.location.replace("/");
       } catch (err) {
           console.log(err)
       }
    };

    const handleUpdate = async ()=> {
        try{
            await axios.put(`https://myblogsserver.herokuapp.com/api/posts/${post._id}`,  {username: user.username,
            title, 
            description}
            );
            setUpdateMode(false);
           } catch (err) {
               console.log(err)
           }
    }

    return (
        <div className='post-detail'>
           <div className="Detail-container">
               {post.photo &&
               <img src={PF + post.photo} alt="" className="cover-image" />}
               {
                   post.username === user?.username && (
                    <div className="PostEdit">
                    <i className="editIcon far fa-edit" onClick={()=> setUpdateMode(true)}></i>
                    <i className="deleteIcon far fa-trash-alt" onClick={handleDelete}></i>
                </div>
                   )
               }
              {
                  updateMode ? <input type="text" value={title} className='post-title-input' autoFocus onChange={(e)=> setTitle(e.target.value)}/> :  <h1 className="post-title"> {title}</h1>
              }
               
            {
                !updateMode && <div className="post-info">
                <Link to={`/?user=${post.username}`} className='link'> 
                <span className="author"><b>{post.username}</b></span>
                </Link>
               
                <span className="updateTime"> {new Date(post.createdAt).toDateString()}</span>
            </div>
            }
            {
                updateMode ? <textarea rows="8"  className='post-desc-input' value={description} onChange={(e)=> setDescription(e.target.value)}/> : <p className="post-description">{description}</p>
            }
            {updateMode && <button className="post-update-btn" onClick={handleUpdate}>update</button>}
           </div>
        </div>
    )
}
