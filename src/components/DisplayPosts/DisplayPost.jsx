import React, { useState } from 'react';

const DisplayPost = (props) => {
    const post= props.post;

    
    return (  
        <div className="post">
            {post.map((post) => (
                <div className='post-preview' key={post.id}>
                    <h2>{post.title}</h2>
                    <p>Written by</p>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
}         
  
export default DisplayPost;