import React, { useEffect, useState } from "react";
import "./AllQuotes.css";
import { Link } from "react-router-dom";

const AllQuotes = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://js-course-server.onrender.com/quotes/get-all-quotes")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setQuotes(data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  console.log(quotes);

  return (
    <div>
     {quotes.map((item)=>{
      return(

      <div className="quoteSite">
              <div className="quoteShow">

        <h3>Author:{item.quoteAuthor}</h3>
        <h3>Quote:{item.quoteText}</h3>
        <h3>Likes:{item.likes}</h3>

        <Link to={"/quote/" + item._id}>
        <button >STISNI ME </button>
        </Link>

      </div>
      
      </div>

      )
     })}
    </div>
  )
};

export default AllQuotes;
