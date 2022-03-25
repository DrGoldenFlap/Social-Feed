import React from 'react';
import{ useState } from 'react';
import './App.css';
import Header from './components/Navbar/Navbar';
import CreatePost from './components/CreatePost/CreatePost';
import DisplayPost from './components/DisplayPosts/DisplayPost';



function App() {
  
  const [post, setPost] = useState([
    {title: "DEVCODECAMP!", body: "Devcodecamp is the bomb!!!", author: "Michael", id: 1}]);

  function addNewPost(posts){
    let tempPost = [posts, ...post];
    setPost(tempPost);
  }


  return (
    <div>
        <Header/>
        <CreatePost addNewPostProperty={addNewPost}/>
        <DisplayPost postData={post}/>

    </div>
  );
}

export default App;
