import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Context } from '../../context/Context';
import './Editorial.css';

const Editorial = () => {
    const [title, setTitle] = useState(" ");
    const [description, setDescription] = useState(" ");
    const [categories, setCategories] = useState(" ");
    const [file, setFile] = useState(null);
    const {user} = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            description,
            categories

        };
        if(file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
            try{
                await axios.post("/upload", data)
            }catch (err) {

            }
        }
        try{
            const res = await axios.post("/posts", newPost);
            window.location.replace("/post/" + res.data._id);
        }catch (err){
            console.log(err)
        };
    };
    return (
        <div className='editorial'>
            {file && (<img src={URL.createObjectURL(file)} alt="" className="coverImg" />)}
            <form className="editorialForm" onSubmit={handleSubmit}>
                <div className="formGroup">
                    <label htmlFor="fileInput">
                       <div className='photoInput'>
                       <i className=" inputIcon fas fa-plus"></i>
                        <span className='upload'>Upload File</span>
                       </div>
                    </label>
                    <input type="file"  id="fileInput" style={{display: 'none'}} onChange={(e) => setFile(e.target.files[0])}/>
                    <input type="text" placeholder='write title' className='writeInput' autoFocus={true}  onChange={e=>setTitle(e.target.value)} />
                    <input type="text" placeholder='category' className='catInput' autoFocus={true}  onChange={e=>setCategories(e.target.value)} />
                    
                </div>
                <div className="formGroup">
                    <textarea rows="10" type='text' className='writeInput writeText'
                    placeholder='write your story..' onChange={e=>setDescription(e.target.value)}></textarea>
                    <div className='sub-btn'>
                    <button className="submitBtn" type="submit">PUBLISH</button>
                    </div>
                </div>
                
            </form>
        </div>
    );
};

export default Editorial;