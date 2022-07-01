import { useState, useEffect } from 'react';
import '../App.css';
import env from 'react-dotenv';

function Post() {

    // const [user, setUser] = useState();
    const [posts, setPosts] = useState([{
      username: '',
      image: '',
    }]);
  
    useEffect(() => {
      fetchPhotos();
    }, [])

    const localhost = `https://insta-restapi.herokuapp.com/posts`
    const fetchPhotos = async () => {
      const res = await fetch(localhost);
      const data = await res.json();
      setPosts(data.viewAll);
      console.log(data.viewAll.reverse());
    };

  return (
    <post className='post-container'>
        <div className='post-img'>
            {posts.map((props, index) => {
                return(
                <div key={index} className='post-main'>
                    <h2 id='heading2'>{props.username}</h2>
                    <img 
                    className='photo-container'
                    src={props.image}
                    alt="random"/>
                </div>
                );
            })}
            </div>
    </post>
  );
}

export default Post;
