import axios from "axios";
import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';
import SideBar from '../../components/SideBar/SideBar';
import './Home.css';

export default function Home() {
    const [posts, setPosts] = useState([]);
    const {search} = useLocation();

    useEffect(()=>{
        const fetchPosts = async ()=>{
            const res = await axios.get("https://myblogsserver.herokuapp.com/api/posts" + search)
            setPosts(res.data);
        }
        fetchPosts();
    }, [search]);
    return (
        <>
            <Header/>
            <div className="home">
                <Posts posts={posts}/>
                <SideBar/>
            </div>
            
        </>
    )
}
