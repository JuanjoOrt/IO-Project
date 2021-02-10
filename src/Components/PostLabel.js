import React from 'react';
import '../../src/Styles/post.css'
import userIcon from '../Styles/images/user_icon.png'

export default class PostLabel extends React.Component{


  render = () => (
    <div className='user-post__box' >
        <div className='user-post__image' >
            <img src={userIcon} className='posts-user-logo'/>
        </div>
        <div className='user-post__body' >
            <div  className='user-post__title' >
                {this.props.title}
            </div>
            <div  className='user-post__text'>
                {this.props.content}
            </div>
        </div>
    </div>
    
  )
}