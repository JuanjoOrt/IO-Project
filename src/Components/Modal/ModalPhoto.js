import React from 'react';
import '../../Styles/modal.css'

export default class ModalPost extends React.Component{     
 
  render = () => 
    <div className='modal-photo__box'>
        <img src={this.props.photoSelected.url}/>
        <div className='modal-photo__title'>{this.props.photoSelected.title}</div>
    </div>
    
  
}