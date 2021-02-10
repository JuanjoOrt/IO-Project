import React from 'react';
import '../../src/Styles/todo.css'

export default class Checkbox extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      isCompleted: this.props.completed
    }
  }



  render = () => (
    <div className="user-todo__checkbox">
        <input type="checkbox" checked={this.state.isCompleted} onChange={() => this.setState({isCompleted: !this.state.isCompleted})}/>
        {
          (this.state.isCompleted)
         ? <div className="user-todo__checkbox-text__completed" onClick={() => this.setState({isCompleted: !this.state.isCompleted})}>{this.props.text}</div>
         : <div className="user-todo__checkbox-text" onClick={() => this.setState({isCompleted: !this.state.isCompleted})}>{this.props.text}</div>
        }
    </div>
    
  )
}