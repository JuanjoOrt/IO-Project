import React from 'react';
import userIcon from '../../Styles/images/user_icon_2.png'
import '../../Styles/modal.css'

export default class AnswerComment extends React.Component{     
 
  render = () => 
    <div className="answer-comment__body">
        <div className="answer-comment__text">
            <div className="answer-comment__title">{this.props.title}</div>
            <div className="answer-comment__answer">{this.props.message}</div>
            <div className="answer-comment__mail">{this.props.mail}</div>
        </div>
        <div className="answer-comment__logo"><img className="answer-comment__logoImage" src={userIcon} /></div>
    </div>
    
  
}