import type from '../Constants/todoConstants'

const initialState = () => ({
    todoInfo: []
});

const setTodoInfo = (state, todoInfo) => ({...state, todoInfo});

export default (state = initialState(), action) => {
    switch (action.type) {
        case type.FETCH_USER_TODO:
            return setTodoInfo(state, action.todoInfo);
        default:
            return state;
    }
};