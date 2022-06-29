// import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Post from './components/Post';
import Input from './components/Input';

function App() {
  
  // const [user, setUser] = useState();
  // const [pictures, setPictures] = useState([]);

  // useEffect(() => {
  //   fetchPhotos();
  // }, [])

  // const fetchPhotos = async () => {
  //   const res = await fetch("https://picsum.photos/v2/list");
  //   const data = await res.json();
  //   setPictures(data);
  // };

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Input />
        <Post />
      </header>
    </div>
  );
}

export default App;
