import React from 'react';
import '../App.css'

class Card extends React.Component {
    render(){
  return (
    <div className='CardHome'>
        <h3>{this.props.name}</h3>
        <p>{this.props.score}</p>
        <button onClick={()=>{
            this.props.goal()
        }}>Goal</button>
    </div>
  )
    }
}


export default Card;