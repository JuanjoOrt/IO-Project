import { connect } from 'react-redux'
import User from './User'
import { fetchUserInfo, clearUserInfo } from "../../Actions/galleryAction";



const mapStateToProps = (state, ownProps) => ({
    ...state.homeReducer
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchUserInfo: (id) => dispatch(fetchUserInfo(id)),
    clearUserInfo: () => dispatch(clearUserInfo())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User)