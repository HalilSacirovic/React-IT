import React from 'react';
import './App.css';
import Card from './Components/Card'

class App extends React.Component {
    state={
        home:0,
        quest:0,
        gameover:false,
    }

componentDidMount(){
    console.log("Mount");
}

componentDidUpdate(){
    console.log("Update");
    if(this.state.gameover === false){
        if(this.state.home === 5){
            this.setState({gameover:true})
        }
        else if(this.state.quest === 5){
            this.setState({gameover:true})
        }
    
    }
}
    render() {
        return (
        
        <div className="App">
            <div className='nav'>
                <Card 
                name={"Home"}
                team={this.state.home}
                goal={()=>{
                    if(this.state.gameover=== false){
                        this.setState({home:this.state.home+1})
                    }
                }} />
                <Card 
                name={"Guest"}
                team={this.state.quest}
                goal={()=>{
                    if(this.state.gameover === false) {

                        this.setState({quest:this.state.quest+1})
                    }
                }} />
               
                TEST PURPOSE
            </div>
        </div>
        )



    }
}

export default App;
