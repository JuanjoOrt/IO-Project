import {combineReducers} from 'redux';
import homeReducer from '../Reducers/homeReducer'
import todoReducer from '../Reducers/todoReducer'
import postReducer from '../Reducers/postReducer'


const reducer = combineReducers({
    homeReducer, todoReducer, postReducer
});

export default reducer