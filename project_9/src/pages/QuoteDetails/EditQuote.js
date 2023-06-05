import React, { useEffect,useState } from "react";
import "./QuoteDetails.css";
import {  useParams } from 'react-router-dom';

const EditQuote = () => {


    const [editAuthor,setEditAuthor] = useState("");
    const [editQuote,setEditQuote] = useState("");
    const [editSource,setEditSource] = useState("");

    const params = useParams();

    useEffect(() => {
        fetch("https://js-course-server.onrender.com/quotes/edit/"+ params.id, {
            method: "PATCH",
                body: JSON.stringify({
                    quoteText : editQuote,

                }),
                headers: {
                "Content-Type": "application/json",
          },
        })
          .then((res) => {
            return res.json();
          })
          .then((result) => {
           //////////////////////
           //////////////////
           ///////////////////
          })
          .catch((error) => {
            console.log("Error", error);
          });
      }, []);

  return (
   
    <div>

        <div>
            <input value={""} placeholder='Author'></input>
            <input placeholder='Quotes'></input>
            <input placeholder='Likes'></input>

            <button onClick={(
                ////
            )=>{

            }} >Edituj</button>
        </div>

    </div>
  )
}

export default EditQuote;