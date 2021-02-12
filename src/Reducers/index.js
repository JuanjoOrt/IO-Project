import {combineReducers} from 'redux';
import homeReducer from '../Reducers/homeReducer'
import todoReducer from '../Reducers/todoReducer'
import postReducer from '../Reducers/postReducer'
import galleryReducer from '../Reducers/galleryReducer'


const reducer = combineReducers({
    homeReducer, todoReducer, postReducer, galleryReducer
});

export default reducer