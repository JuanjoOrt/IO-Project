import { connect } from 'react-redux'
import User from './User'
import { fetchUserInfo, clearUserInfo } from "../../Actions/homeAction";
import { fetchUserTodo, clearUserTodo } from "../../Actions/todoAction";



const mapStateToProps = (state, ownProps) => ({
    ...state.homeReducer, ...state.todoReducer
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchUserInfo: (id) => dispatch(fetchUserInfo(id)),
    fetchUserTodo: (id) => dispatch(fetchUserTodo(id)),
    clearUserInfo: () => dispatch(clearUserInfo()),
    clearUserTodo: () => dispatch(clearUserTodo()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User)