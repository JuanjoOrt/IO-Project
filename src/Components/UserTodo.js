import React from 'react';
import '../../src/Styles/todo.css'

export default class UserTodo extends React.Component{


  render = () => (
    <div className='user-todo__box'>
        <div className='user-todo__title'> To-do list:</div>
        <div className='user-todo__content'></div>
    </div>
    
  )
}
