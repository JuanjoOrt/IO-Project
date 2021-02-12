import React from 'react';
import Checkbox from './Checkbox'
import '../../src/Styles/todo.css'

export default class UserTodo extends React.Component{


  render = () => (
    <div className='user-todo__box'>
        <div className='user-todo__title'> To-do list:</div>
        <div className='user-todo__content'>
            {this.props.todoList.map(todo => <Checkbox key={todo.id} text={todo.title} completed={todo.completed} id={todo.id} />) }
            <div className={'clear-space-gray'}/>
        </div>
    </div>
    
  )
}
