import React from 'react';
import './App.css';

// const MockList = ["Idi spavaj","Idi uci"];

class App extends React.Component {

  state = {
    taskName: "",
    toDoCard:[]
  }
  addNewTask(){
    this.setState({taskName:"",toDoCard:[...this.state.toDoCard,this.state.taskName]})
  }
 render(){
  return (
   <div className="container">
      <div className="todo__box">
        <div className="title">
          <h2 className="h__todo">Todo App</h2>
          <p>codewithnepal</p>
        </div>
        <div className="form">
          <input onChange={(event)=> {
            this.setState({taskName:event.target.value})
          }} id="taskName" type="add" value={this.state.taskName} placeholder="Add your new todo" />
          <button id="btnn1" className="btnn1" onClick={()=>{
            this.addNewTask()
          }}>
            <img src="slika/plus (4).png" className="img" alt="" />
          </button>
        </div>
        <div id="list" className="d-grid gap-2 col-6 button">
          {/* {MockList.map((item)=><p>{item}</p>)} */}
          
          {this.state.toDoCard.map((item,index)=><button key={index} className='list-items'>{item}</button>)}
           {/* <button className="list-items">how to make a game</button>
                <button className="list-items">keyword researching</button>
                <button className="list-items">ui ux desing for app</button>  */}
        </div>
        <div className="footerr">
          <p className="p">You have <span id="numberOfItems">0</span> pending tasks</p>
          <button id="btnn2" className="btnn2" onClick={()=>{
            this.setState({toDoCard:[]})
          }}>Clear All</button>
        </div>
      </div>
    </div>

  )
 }
}

export default App;
