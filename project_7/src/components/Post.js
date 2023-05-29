import React from "react";
import redHeart from "../assets/heartred.png";
import whiteHeart from "../assets/heartwhite.png";


function Post(props){

    let heartImg = whiteHeart;

    const isLikedByMe = props.post.likes.includes(props.myUsername);

    if(isLikedByMe)
    {
        heartImg =redHeart;
    }

    

  return (
    <div className='post'>
          <div>
            <img src='https://www.mgelectronic.rs/content/images/thumbs/0081389_DS1002-01-1X01R13-4.jpg.jpeg' className='post-img'/>
          </div>
          <div className='post-buttons'>
            <button onClick={()=>{
                props.likeHandler(props.post.id)
            }}>
               <img src={heartImg} width = "15px" />
            </button>
            <button onClick={() => props.showComments(props.post.id)}>comment</button>

            <button>Šer</button>
          
          </div>

          <div>
            <p className='post-likes'>{props.post.likes.length} likes</p>
            <p className='post-description'><span className='post-username'>{props.post.username}</span> <span className='post-description'>{props.post.description}</span></p>
          </div>

          <div>

          <div>
            {/* {props.showComments(props.post.id).map((comment, index) => (
                <p key={index}>
                {comment.username}: {comment.comment}
                </p>
            ))} */}
        </div>

          </div>
        </div>

  )
}


export default Post;