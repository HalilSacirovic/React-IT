import React from 'react';
import { quoteSlice } from "../../store/quoteSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { compose } from 'redux';
import "../QuoteDetails/Favorites.css"

const Favorite = () => {

    
const quoteState  = useSelector((state)=>state.quote)
const dispatch = useDispatch();

  return (
    <div> 
    <Link to={"/"}>
        <button>Go to All Quotes</button>
    </Link>
    {quoteState.favorites.map((item,index) =>{
        return (
            <div key={index} className='favorites'>
                
               <div className='favorites_box'>
               <p>Author:{item.quoteAuthor};</p>
                <p>Quote:{item.quoteText};</p>
                <p>Likes:{item.quoteLikes};</p>
               </div>

            </div>
        )
    })}

    {console.log(quoteState.favorites)}
    </div> 
  )
}

export default Favorite
