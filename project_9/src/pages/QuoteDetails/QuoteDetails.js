import React, { useEffect,useState } from "react";
import "./QuoteDetails.css";
import { quoteSlice } from "../../store/quoteSlice";
import { useSelector, useDispatch } from "react-redux";
import {  Link, Navigate, useNavigate, useNavigation, useParams } from 'react-router-dom';

function QuoteDetails() {
const params = useParams();
/// kako zapravo radi ovaj params 
/// i zasto vraca samo id ?znam da sam postavio na link tagu ali treba mi objasnjenje
// console.log("Params = ",params);


const [data,setData] = useState({})

const quoteState  = useSelector((state)=>state.quote)
const authState = useSelector((state) => state.auth)
const dispatch = useDispatch();


// console.log("Data usestate = ",data)
const navigate = useNavigate();

// console.log(params.id);
console.log("\nQuoteState ====>",quoteState);

useEffect(() => {
  fetch("https://js-course-server.onrender.com/quotes/get-quote/"+ params.id)
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      setData(result);
      // console.log("setData result",result)
      // console.log("setData",setData(result))
    })
    .catch((error) => {
      // console.log("Error", error);
    });
}, []);

const deleteQuote = () => {
  fetch("https://js-course-server.onrender.com/quotes/delete/" + params.id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization:localStorage.getItem("auth_token")
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      // console.log("result- >>>>>>",result)
      alert("OBRISANO??");
      navigate("/");
    })
    .catch((error) => {
      // console.log("Error", error);
    });
};

const reportQuote = () => {
  const reportMessage = prompt("Enter report message");
  const reportObject = {
    quote: data,
    reportMessage: reportMessage,
    user: {
      fullName: authState.fullName,
      id: authState.id,
    },
  };

 dispatch(quoteSlice.actions.setReport(reportObject))
 navigate("/reported");
console.log(reportObject)
};
  
  return (
    
    <div>
      <div className="quoteShow">

        <h3>Author:{data.quoteAuthor}</h3>
        <h3>Quote:{data.quoteText}</h3>
        <h3>Likes:{data.likes}</h3>
    </div>

    <button onClick={deleteQuote}>Delete Quote</button>
    <Link to={"/favorite"}>
    <button onClick={()=>{
      dispatch(quoteSlice.actions.setFavorite(data))
      
    }}>Add Favorite</button>
  </Link>

    <button onClick={() =>{
    reportQuote()
    }}>
      Report Quote
    </button>

    </div>
    );
}

export default QuoteDetails;
