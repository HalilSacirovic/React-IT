import React from 'react';
import { quoteSlice } from "../../store/quoteSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { compose } from 'redux';
import "../QuoteDetails/Favorites.css";


const Report = () => {

       
const quoteState  = useSelector((state)=>state.quote);
const dispatch = useDispatch();

  return (
    <div> 
    <Link to={"/"}>
        <button>Go to All Quotes</button>
    </Link>
    {quoteState.report.map((item,index) =>{
        return (
            <div key={index} className='favorites'>
                
               <div className='favorites_box'>
                <p>
                   Quote:<span> {item.quote.quoteText}</span>
                </p>
                <p>
                   Author: <span>{item.quote.quoteAuthor}</span>
                </p>
                <p>
                  Report Message:  <span>{item.reportMessage}</span>
                </p>
                <p>
                   User who report this: <span>{item.user.fullName}</span>
                </p>
                <p>
                  His Id:  <span>{item.user.id}</span>
                </p>
               </div>

            </div>
        )
    })}

    {console.log(quoteState.favorites)}
    </div> 
  )

}

export default Report
