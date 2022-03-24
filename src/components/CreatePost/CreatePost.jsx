import React, { useState } from 'react';

const CreatePost= (props) => {
    const[title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const current = new Date();
    const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const post = {title, body, author, date}
        console.log(post)

    }

    return (
        <div className='create'>
            <h2>Create New Post</h2>
            <form onSubmit={handleSubmit}>
                <label>Post Title:</label>
                <input 
                    type='text'
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                        />
                <label>Post body:</label>
                <textarea 
                    required
                    value= {body}
                    onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                    <label>Author:</label>
                    <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Michael">Michael</option>
                    <option value="Brent">Brent</option>
                    <option value="Garret">Garret</option>
                    <option value="Mitch">Mitch</option>
                    <option value="Matthew">Matthew</option>
                    <option value="Parker">Parker</option>
                    <option value="Gary">Gary</option>
                    <option value="Dustin">Dustin</option>
                    </select>
                <button>Add Post</button>               
            </form>
        </div>
    );
}

export default CreatePost;