import { connect } from 'react-redux'
import Home from './Home.js'



const mapStateToProps = (state, ownProps) => ({
    ...state.galleryReducer
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)