import React from 'react';
import logo from './logo.svg';
import './App.css';
import Classnames from './App.module.css';
import getMyName from './getMyName';
import { gender, getMyAge } from './getProfileInfo';
import MyName from './NameComponent';
import LogoComponent from './components/LogoComponent';
import NameText from './components/examples/NameText';

class App extends React.Component {
    state= {
        myAge:getMyAge(1954),
       
    }
    render() {
        return (
            <div className={[Classnames.App, Classnames.Nesto]}>
                <header className="App-header">
                    <LogoComponent
                        logo={logo}
                        name={'My React App'}
                        date={new Date()}
                    ></LogoComponent>
                    <p
                        style={{
                            backgroundColor: 'white', // background-color ==> backgroundColor
                            paddingBottom: '5px', // padding-bottom ==> paddingBottom
                        }}
                    >
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <MyName />
                    <NameText name={"Halil"}/>
                    <p>I am {this.state.myAge} years old</p>
                    <button onClick={()=>{
                        // return myAge+1;
                        // this.setState((prevState)=>{
                        //     return {...prevState,myAge:this.state.myAge+1}
                        // })
                       
                    this.setState({myAge:this.state.myAge+1})    
                    }}>Add age</button>
                </header>
            </div>
        );
    }
}

export default App;
