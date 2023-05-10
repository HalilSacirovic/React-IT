import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    author: "",
    text: "",
    like: null,
  };

  componentDidMount() {
  this.getRandomQuote()
  }

  /*
  likes: 5297
quoteAuthor: "hello"
quoteId: "63d1846cf353e20036f8b3e5"
quoteSource: "hello"
quoteText: "hello"
 */


getRandomQuote(){
  fetch("https://js-course-server.onrender.com/quotes/get-random-quote")
  .then((res) => res.json())
  .then((data) => this.setState({text:data.quoteText,author:data.quoteAuthor,like:data.likes,}))
  .catch((error)=>console.log(error));
}
  render() {
    return (
      <div className="app">
        <div className="hero">
          <h3>Author:{this.state.author}</h3>
          <p className="para">Citat:{this.state.text}</p>
          <p className="para"> Likes:{this.state.like}</p>
        </div>
        <button onClick={()=>{
            this.getRandomQuote()
        }}>Daj nasumicnu lol</button>
      </div>
    );
  }
}

export default App;
