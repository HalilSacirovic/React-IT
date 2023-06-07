import React, { useEffect,useState } from "react";
import "./QuoteDetails.css";
import { useSearchParams, useParams, useNavigate, Link } from "react-router-dom";

const EditQuote = () => {


    const [editAuthor,setEditAuthor] = useState("");
    const [editQuote,setEditQuote] = useState("");
    const [editSource,setEditSource] = useState("");


    const params = useParams();


  
      const EditData = {
        quoteText : editQuote,
        quoteAuthor:editAuthor,
        quoteSource:editSource,
      }

      const navigate = useNavigate();
    

      let TryEdit =()=>{

    
        fetch("https://js-course-server.onrender.com/quotes/edit/"+ params.id, {
            method: "PATCH",
                body: JSON.stringify(EditData),
                headers: {
                "Content-Type": "application/json",
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
               value={editSource}
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