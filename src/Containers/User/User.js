import React from 'react';
import Layout from '../Layout/Layout'
import ReactModal from 'react-modal';

import UserTarget from "../../Components/UserTarget";
import UserTodo from "../../Components/UserTodo";
import PostLabel from '../../Components/PostLabel';
import ModalPost from '../../Components/Modal/ModalPost';
import '../../Styles/user.css'

export default class GalleryTarget extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      modalPostActive: false
    }
  }

  componentDidMount = () => {
    this.props.fetchUserInfo(this.props.id)
    this.props.fetchUserTodo(this.props.id)
    this.props.fetchUserPosts(this.props.id)
    this.props.fetchComments()
  }

  handleClickOpenPost = () => {
    this.setState({modalPostActive: true})
  }

  handleClickClosePost = () => {
    this.setState({modalPostActive: false})
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
                                                                            onClick={() => this.handleClickOpenPost()}
                                                                        />
            )}
            
            <ReactModal 
            isOpen={this.state.modalPostActive}
            shouldCloseOnOverlayClick={true}
            style={{
              overlay: {
                backgroundColor: 'rgba(150, 150, 150, 0.5)'
              },
              content: {
                width: '47.3%',
                height: 'auto',
                top: '15%',
                left: '21%'
              }
            }}
            >
            <ModalPost active={this.state.modalPostActive} onClick={() => this.handleClickClosePost()} title={'SUNT AUT FACERE REPELLAT PROVIDENT OCCAECATI EXCEPTURI OPTIO REPREHENDERIT'} content={'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'}/>
            </ReactModal>
            </div>
          <div className='user-panel__right'></div>
        </div>
    </Layout>
  )
}
