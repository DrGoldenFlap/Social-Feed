import React from 'react';
import{ useState } from 'react';
import './App.css';
import Header from './components/Navbar/Navbar';
import CreatePost from './components/CreatePost/CreatePost';
import DisplayPost from './components/DisplayPosts/DisplayPost';


function App() {
  const[post, setPost] = useState([
    {title: "DEVCODECAMP!", body: "Devcodecamp is the bomb!!!", author: "Michael", id: 1}
]);


  return (
    <div className="App">
        <Header/>
        <CreatePost/>
        <DisplayPost post={post}/>

    </div>
  );
}

export default App;
