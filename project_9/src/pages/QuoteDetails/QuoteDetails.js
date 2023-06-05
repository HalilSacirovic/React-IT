import React, { useEffect,useState } from "react";
import "./QuoteDetails.css";
import {  useParams } from 'react-router-dom';

function QuoteDetails() {
const params = useParams();
/// kako zapravo radi ovaj params 
/// i zasto vraca samo id ?znam da sam postavio na link tagu ali treba mi objasnjenje
console.log("Params = ",params);


const [data,setData] = useState({})

console.log("Data usestate = ",data)

console.log(params.id);

useEffect(() => {
  fetch("https://js-course-server.onrender.com/quotes/get-quote/"+ params.id)
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      setData(result);
      console.log("setData result",result)
      console.log("setData",setData(result))
    })
    .catch((error) => {
      console.log("Error", error);
    });
}, []);
  
  return (
    <div>
      <div className="quoteShow">

        <h3>Author:{data.quoteAuthor}</h3>
        <h3>Quote:{data.quoteText}</h3>
        <h3>Likes:{data.likes}</h3>
    </div>

    </div>
    );
}

export default QuoteDetails;
