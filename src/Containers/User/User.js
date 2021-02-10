import React from 'react';
import Layout from '../Layout/Layout'

import UserTarget from "../../Components/UserTarget";
import UserTodo from "../../Components/UserTodo";
import '../../Styles/user.css'

export default class GalleryTarget extends React.Component{

  componentDidMount = () => {
    this.props.fetchUserInfo(this.props.id)
    this.props.fetchUserTodo(this.props.id)
  }

  componentWillUnmount = () => {
    this.props.clearUserInfo()
    this.props.clearUserTodo()
  }

  render = () => (
    <Layout>
        <div className='user__main'>
          <div className='user-panel__left'>
            <div className='user-panel__profile'>
              <UserTarget 
                id={this.props.userInfo.id} 
                name={this.props.userInfo.name} 
                email={this.props.userInfo.email} 
                phone={this.props.userInfo.phone} 
                web={this.props.userInfo.website} 
                detailed
              />
            </div>
            <div className='user-panel__todo'>
              {(this.props.todoInfo) && <UserTodo todoList={this.props.todoInfo}/>}
            </div>
          </div>
          <div className='user-panel__middle'></div>
          <div className='user-panel__right'></div>
        </div>
    </Layout>
  )
}
