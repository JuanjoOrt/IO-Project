import { connect } from 'react-redux'
import Home from './Home.js'
import {fetchGalleryData} from '../../Actions/galleryAction'



const mapStateToProps = (state, ownProps) => ({
    ...state.galleryReducer
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchGalleryData: () => dispatch(fetchGalleryData())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)