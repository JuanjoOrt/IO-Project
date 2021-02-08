import reducers from '../Reducers/index';
import { createStore, applyMiddleware, compose }from 'redux';
import thunk from 'redux-thunk'


const createStoreWithMiddleware = compose(
    applyMiddleware(thunk)
)(createStore);

export default function createStorage() {
    return createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}