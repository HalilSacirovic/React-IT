import React, { useState } from 'react';
import './App.css';
import mydata from "./data.json";
import Post from './components/Post';


function Home() {

  const myUsername = "halils";
  const [mdata,setData] = useState(mydata);


  const likeHandler = (postId) => {
    const newData = mdata.map((item, index) => {
      if (item.id === postId) {
        let likes = item.likes;
        if (likes.includes(myUsername)) {
          likes = likes.filter((u) => u !== myUsername);
        } else {
          likes.push(myUsername);
        }
        item.likes = likes;
      }
      return item;
    });
    setData(newData);
  };


  const showComments = (postId) => {
    const post = mdata.find((item) => item.id === postId);
    if (post) {
      return post.comments.map((comment) => {
        return {
          username: comment.username,
          comment: comment.comment
        };
      });
    }
    return [];
  };


  



  
  return (
    <div className='App'>
      <div className='posts'>
      {mdata.map((item) => (
          <Post
            key={item.id}
            post={item}
            showComments = {showComments} 
            likeHandler={likeHandler}
            myUsername={myUsername}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
