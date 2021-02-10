import { connect } from 'react-redux'
import Home from './Home.js'
import {fetchUsersData} from '../../Actions/homeAction'



const mapStateToProps = (state, ownProps) => ({
    ...state.homeReducer
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchUsersData: () => dispatch(fetchUsersData())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)