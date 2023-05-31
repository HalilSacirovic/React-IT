import { Link,useLocation } from 'react-router-dom';
import Post from './Post';
import Home from '../Home';
import React, { useState } from 'react';
import '../App.css';
import mydata from "../data.json";



const PostDetails = () => {
    
    const location = useLocation();
    console.log( "Location state ",location.state);

    const smth = location.state

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
    <div >
        <Post 
           postdetails={location.state}
           key={smth.id}
           post={smth}
           showComments = {showComments} 
           likeHandler={likeHandler}
           myUsername={myUsername}
        />
    </div>
  )
}


export default PostDetails