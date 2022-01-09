import React from 'react'
import image from '../../Assets/music.jpg'
import './Post.css'

export default function Post() {
    return (
        <div className='post'>
            <img className='postImg' src={image} alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">How music help in learning</span>
                <hr/>
                <span className="postTime">1 hour ago</span>
            </div>
            <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolorum illum, porro perspiciatis laudantium doloremque. Iusto doloremque quos corrupti magnam soluta, unde beatae cumque quibusdam eum suscipit. Beatae, sunt dignissimos?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolorum illum, porro perspiciatis laudantium doloremque. Iusto doloremque quos corrupti magnam soluta, unde beatae cumque quibusdam eum suscipit. Beatae, sunt dignissimos?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolorum illum, porro perspiciatis laudantium doloremque. Iusto doloremque quos corrupti magnam soluta, unde beatae cumque quibusdam eum suscipit. Beatae, sunt dignissimos?
            </div>
        </div>
    )
}
