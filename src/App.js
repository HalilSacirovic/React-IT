import React from 'react';
import logo from './logo.svg';
import './App.css';
import getMyName from './getMyName';
import { gender, getMyAge } from './getProfileInfo';
import MyName from './NameComponent';

class App extends React.Component {
    render() {
        const myName = getMyName();
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <MyName />
                    <p>My name is {myName}</p>
                    <p>I am {getMyAge(1995)} years old</p>
                    <p>{gender}</p>
                </header>
            </div>
        );
    }
}

export default App;
