import React from 'react';
import { Link } from "wouter";
import '../../src/Styles/HomeGallery.css'
import userIcon from '../Styles/images/user_icon.png'
import { BiPhoneCall, BiLaptop } from "react-icons/bi";

export default class UserTarget extends React.Component{


  render = () => (
        (!this.props.detailed)
        ?
        <Link href={`/user/${this.props.id}`}><div className='user-target__box' >
            <div className="user-target__content">
                <div className="user-target__picture"><img src={userIcon} className='user-logo'/></div>
                  <div className="user-target__body">
                    <div className="user-target__name">{this.props.name}</div>
                    <div className="user-target__mail">{this.props.email}</div>
                  </div>
                </div>
            </div>
        </Link>
        : <div className='user-target__box' >
        <div className="user-target__content">
            <div className="user-target__picture"><img src={userIcon} className='user-logo'/></div>
            <div className="user-target__body">
              <div className="user-target__name">{this.props.name}</div>
              <div className="user-target__mail">{this.props.email}</div>
              <div className="user-target__phone"><BiPhoneCall className='user-target__icon'/>{this.props.phone}</div>
              <div className="user-target__web"><BiLaptop className='user-target__icon'/>{this.props.web}</div>
            </div>
        </div>
    </div>

  )
}
