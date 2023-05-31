import React from 'react'
import { Link,useLocation } from 'react-router-dom';
import Post from './Post';
import Home from '../Home';



const PostDetails = (props) => {
    
    const location = useLocation();
    console.log(location.state)

    return (
    <div >
        <Post post={location.state} showComments={true} />
    </div>
  )
}


export default PostDetails