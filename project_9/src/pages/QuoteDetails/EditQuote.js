import React, { useEffect,useState } from "react";
import "./QuoteDetails.css";
import { useSearchParams, useParams, useNavigate, Link } from "react-router-dom";

const EditQuote = () => {


    const [editAuthor,setEditAuthor] = useState("");
    const [editQuote,setEditQuote] = useState("");
    const [editLikes,setEditSource] = useState("");


    const params = useParams();


  
      const EditData = {
        quoteText : editQuote,
        quoteAuthor:editAuthor,
        likes:editLikes,
      }

      const navigate = useNavigate();
    

      let TryEdit =()=>{

    
        fetch("https://js-course-server.onrender.com/quotes/edit/"+ params.id, {
            method: "PATCH",
                body: JSON.stringify(EditData),
                headers: {
                "Content-Type": "application/json",
                authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpZCI6IjY0ODBiYzhhZGE5NDRhMDAzMjAwNTJlMyIsImZ1bGxOYW1lIjoiVGVzdCBUZXN0IiwiaXNBZG1pbiI6ZmFsc2UsImlzR3Vlc3QiOmZhbHNlLCJpYXQiOjE2ODYxNTg2MjksImV4cCI6MTcxNzY5NDYyOX0.yfAf8zkl41BBhvAVJqqTU9_I-MoUJnkSjOFofLtrWys"
          },
        })
          .then((res) => {
            return res.json();
          })
          .then((result) => {

            alert("valjda uspesno??");
            navigate("/")

          })
          .catch((error) => {
            console.log("Error", error);
          });

        }


  return (
   
    <div>

        <div>
            <input  value={editAuthor}
              onChange={(e) => {
                setEditAuthor(e.target.value);
              }}
               placeholder='Author'></input>
            <input
             value={editQuote}
             onChange={(e) => {
               setEditQuote(e.target.value);
             }}
            placeholder='Quotes'></input>
            <input 
               value={editLikes}
               onChange={(e) => {
                 setEditSource(e.target.value);
                 console.log(e.target.value)
               }}
            placeholder='Likes'></input>

           <button onClick={()=>{
            TryEdit();
           }}>
            Probaj da editujes
           </button>
        </div>

    </div>
  )
  }


export default EditQuote;