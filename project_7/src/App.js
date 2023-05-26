import React, { useState } from 'react';
import './App.css';
import data from "./data.json"

function App() {
  return (
    <div className='App'>
      <div className='posts'>
        <div className='post'>
          <div>
            <img src='https://www.mgelectronic.rs/content/images/thumbs/0081389_DS1002-01-1X01R13-4.jpg.jpeg' className='post-img'/>
          </div>
          <div>
            <button>Like</button>
            <button>Comment</button>
            <button>Šer</button>
          
          </div>

          <div>
            <p><span className='post-username'>halils</span> <span className='post-description'>Zuri8</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
