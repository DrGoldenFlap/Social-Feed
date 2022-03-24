import React from 'react';
import{ useState } from 'react';
import './App.css';
import Header from './components/Navbar/Navbar';
import CreatePost from './components/CreatePost/CreatePost';


function App() {
  return (
    <div className="App">
        <Header/>
        <CreatePost/>

    </div>
  );
}

export default App;
