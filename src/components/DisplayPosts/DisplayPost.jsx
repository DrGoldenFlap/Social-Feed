import React, { useState } from 'react';
import Post from '../Post/Post';

const DisplayPost = (props) => {
   

    
    return (  
        <div className="post">
            {props.postData.map((entry) => {
                return(
                    <Post entry={entry}/>
                );

            })
                
            }
        </div>
    );
}         
  
export default DisplayPost;