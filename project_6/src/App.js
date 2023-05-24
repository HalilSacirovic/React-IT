import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const[state,setState] = useState({counter:0,});
  return (
    <div className="App">
        <header className="App-header">
          <h1 className="count-number">{state.counter}</h1>
          <div className="buttons-wrapper">
            <div
              className="count-button"
              onClick={() => {
                setState({ counter:state.counter + 1 });
              }}
            ></div>
            <div
              className="reset-button"
              onClick={() => {
                setState({ counter: 0 });
              }}
            ></div>
          </div>
        </header>
      </div>
  );
}

export default App;
