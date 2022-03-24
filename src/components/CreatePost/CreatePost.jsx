import React, { useState } from 'react';

const CreatePost= (props) => {
    const[title, setTitle] = useState('');
    const [body, setBody] = useState('');

    return (
        <div className='create'>
            <h2>Create New Post</h2>
            <form>
                <label>Post Title:</label>
                <input 
                    type='text'
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                        />
                <label>Post body</label>
                <textarea 
                    required
                    value= {body}
                    onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                <button>Add Post</button>
                <p>{title}</p>
                <p>{body}</p>
            </form>
        </div>
    );
}

export default CreatePost;