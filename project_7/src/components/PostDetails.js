import { Link,useLocation } from 'react-router-dom';
import Post from './Post';
import Home from '../Home';
import React, { useState } from 'react';
import '../App.css';
import mydata from "../data.json";



const PostDetails = () => {
    
    const location = useLocation();
    console.log( "Location state ",location.state);

    const smth = location.state;

    console.log(" SOMETHING  -ID  = > ",smth.id)

    const myUsername = "halils";
    const [mdata,setData] = useState(mydata);
    const [smthdata,setSmth] = useState(smth);
    
  
  
    const likeHandler = (postId) => {
      const newData = [smthdata].map((item, index) => {
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
      setSmth(newData);
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