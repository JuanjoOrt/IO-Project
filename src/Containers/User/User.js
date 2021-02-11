import React from 'react';
import Layout from '../Layout/Layout'
import ReactModal from 'react-modal';

import UserTarget from "../../Components/UserTarget";
import UserTodo from "../../Components/UserTodo";
import PostLabel from '../../Components/PostLabel';
import ModalPost from '../../Components/Modal/ModalPost';
import {modalStyle} from '../../utils/modalStyle.js'
import {getCommentsById} from '../../utils/lookInArray'
import '../../Styles/user.css'

export default class GalleryTarget extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      modalPostActive: false,
      commentInThisPost: [],
      postSelected: {}
    }
  }

  componentDidMount = () => {
    this.props.fetchUserInfo(this.props.id)
    this.props.fetchUserTodo(this.props.id)
    this.props.fetchUserPosts(this.props.id)
    this.props.fetchComments()
  }

  handleClickOpenPost = (postId, post) => {
    this.setState({modalPostActive: true,
                   commentInThisPost: getCommentsById(this.props.comments, postId),
                   postSelected: post})
  }

  handleClickClosePost = () => {
    this.setState({modalPostActive: false,
                   commentInThisPost: [],
                   postSelected: {}})
  }


  componentWillUnmount = () => {
    this.props.clearUserInfo()
    this.props.clearUserTodo()
    this.props.clearUserPosts()
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
            <div className='user-panel__middle'>
            {(this.props.userPosts) && this.props.userPosts.map(post => <PostLabel 
                                                                            key={post.id} 
                                                                            title={post.title} 
                                                                            content={post.body} 
                                                                            postId={post.id} 
                                                                            onClick={() => this.handleClickOpenPost(post.id, {title: post.title, content: post.body})}
                                                                        />
            )}
            
            <ReactModal 
            isOpen={this.state.modalPostActive}
            onRequestClose={this.handleClickClosePost}
            shouldCloseOnOverlayClick={true}
            style={modalStyle}>
              <ModalPost active={this.state.modalPostActive} comments={this.state.commentInThisPost} title={this.state.postSelected.title} content={this.state.postSelected.content}/>
            </ReactModal>
            <div className={'clear-space'}/>
            </div>
          <div className='user-panel__right'></div>
        </div>
    </Layout>
  )
}
