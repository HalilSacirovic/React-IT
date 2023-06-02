import React, { useEffect,useState } from "react";
import "./QuoteDetails.css";
import { Link,useLocation, useParams } from 'react-router-dom';

function QuoteDetails() {
const params = useParams();
const [data,setData] = useState({})

console.log(params.id);

useEffect(() => {
  fetch("https://js-course-server.onrender.com/quotes/get-quote/"+ params.id)
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      setData(result);
    })
    .catch((error) => {
      console.log("Error", error);
    });
}, []);
  
  return (
    <div>
    
      Author:{data.quoteAuthor}

    </div>
    );
}

export default QuoteDetails;
