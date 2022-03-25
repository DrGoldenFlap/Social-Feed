import React, { useState } from 'react';

const Post = (props) => {
    return (  
        <div key={props.entry.id}>
                    <h2>{props.entry.title}</h2>
                    <p>{props.entry.author}</p>
                    <p>{props.entry.body}</p>
                </div>
    );
}
 
export default Post;