import React, { useEffect,useState } from "react";
import { useSearchParams, useParams, useNavigate, Link } from "react-router-dom";

const TryAdd = () => {

    
    const [newAuthor,setnewAuthor] = useState("");
    const [newQuote,setnewQuote] = useState("");
    const [newSource,setnewSource] = useState("");
    const [newCategory,setnewCategory] = useState("63e112150811382da36bf8ec");


    // const params = useParams();

    const navigate = useNavigate();


    const DataAdd = {
        quoteText : newQuote,
        quoteAuthor:newAuthor,
        quoteSource:newSource,
        category:newCategory,

    }

   const fetchAdd = ()=>{
    fetch("https://js-course-server.onrender.com/quotes/add-quote",{
        method: "POST",
        body: JSON.stringify(DataAdd),
        headers: {
        "Content-Type": "application/json",
        authorization:localStorage.getItem("auth_token"),
  },
    })
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        alert("USPESNO");
        navigate("/")
    })
    .catch((err)=>{
        alert(err)
    })
   } 



  return (
    <div>

        <div>
            <input  value={newAuthor}
              onChange={(e) => {
                setnewAuthor(e.target.value);
              }}
               placeholder='Author'></input>
            <input
             value={newQuote}
             onChange={(e) => {
               setnewQuote(e.target.value);
             }}
            placeholder='Quotes'></input>
            <input 
               value={newSource}
               onChange={(e) => {
                 setnewSource(e.target.value);
                 console.log(e.target.value)
               }}
            placeholder='Source'></input>
            <input 
               value={newCategory}
            placeholder='category'></input>

           <button onClick={()=>{
            fetchAdd();
           }}>
            Probaj da dodas
           </button>
        </div>

    </div>
  )
}


export default TryAdd