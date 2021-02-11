import React from 'react';
import userIcon from '../../Styles/images/user_icon.png'
import AnswerComment from './AnswerComment'
import '../../Styles/modal.css'

export default class ModalPost extends React.Component{     
 
  render = () => 
    (this.props.active) &&
    <div className='modal-post__body' onClick={this.props.onClick}>
        <div className='modal-post__main-answer'>
          <div  className='modal-post__main-answer_logo'><img src={userIcon} className='modal-post__user-logo'/></div>
          <div  className='modal-post__main-answer_content'>
            <div  className='modal-post__main-answer_title'>{this.props.title}</div>
            <div  className='modal-post__main-answer_text'>{this.props.content}</div>
          </div>
        </div>
        <div className='modal-post__comments'>
        <AnswerComment title={'id labore ex et quam laborum'} message={'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'} mail={"Jayne_Kuhic@sydney.com"}/>
        <AnswerComment title={'id labore ex et quam laborum'} message={'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'} mail={"Jayne_Kuhic@sydney.com"}/>
        <AnswerComment title={'id labore ex et quam laborum'} message={'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'} mail={"Jayne_Kuhic@sydney.com"}/>
        <AnswerComment title={'id labore ex et quam laborum'} message={'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'} mail={"Jayne_Kuhic@sydney.com"}/>
        <AnswerComment title={'id labore ex et quam laborum'} message={'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'} mail={"Jayne_Kuhic@sydney.com"}/>
        </div>
    </div>
    
  
}