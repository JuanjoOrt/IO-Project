import { connect } from 'react-redux'
import User from './User'
import { fetchUserInfo, clearUserInfo } from "../../Actions/homeAction";
import { fetchUserTodo, clearUserTodo } from "../../Actions/todoAction";
import { fetchUserPosts, clearUserPosts,  fetchComments } from "../../Actions/postsAction";
import { fetchUserAlbums, fetchAllPhotos } from "../../Actions/galleryAction";



const mapStateToProps = (state, ownProps) => ({
    ...state.homeReducer, ...state.todoReducer, ...state.postReducer, ...state.galleryReducer
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchUserInfo: (id) => dispatch(fetchUserInfo(id)),
    fetchUserTodo: (id) => dispatch(fetchUserTodo(id)),
    fetchUserPosts: (id) => dispatch(fetchUserPosts(id)),
    fetchUserAlbums: (id) => dispatch(fetchUserAlbums(id)),
    fetchAllPhotos: () => dispatch(fetchAllPhotos()),
    fetchComments: () => dispatch(fetchComments()),
    clearUserInfo: () => dispatch(clearUserInfo()),
    clearUserTodo: () => dispatch(clearUserTodo()),
    clearUserPosts: () => dispatch(clearUserPosts()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User)