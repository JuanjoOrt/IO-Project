import {combineReducers} from 'redux';
import homeReducer from '../Reducers/homeReducer'
import todoReducer from '../Reducers/todoReducer'


const reducer = combineReducers({
    homeReducer, todoReducer
});

export default reducer