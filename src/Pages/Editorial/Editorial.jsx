import React from 'react';
import './Editorial.css';

const Editorial = () => {
    return (
        <div className='editorial'>
            <form className="editorialForm">
                <div className="formGroup">
                    <label htmlFor="fileInput">
                        <i className=" inputIcon fas fa-plus"></i>
                    </label>
                    <input type="file"  id="fileInput" style={{display: 'none'}} />
                    <input type="text" placeholder='write title' className='writeInput' autoFocus={true} />
                </div>
                <div className="formGroup">
                    <textarea type='text' className='writeInput writeText' placeholder='write your story...'></textarea>
                </div>
                <button className="submit">Publish</button>
            </form>
        </div>
    );
};

export default Editorial;