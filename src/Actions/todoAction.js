import type from '../Constants/todoConstants'
import {getTodo} from '../Services/servicesCalls/servicesCalls'

export const saveUserTodo = (result, id) => {
    const userTodo = []
    result.map(todoItem => {
        if (todoItem.userId === id)
        userTodo.push(todoItem)
    })
    return ({
        todoInfo: userTodo,
        type: type.FETCH_USER_TODO
    });
}

export const clearUserTodo = () => ({
    todoInfo: [],
    type: type.FETCH_USER_TODO
});


export const fetchUserTodo = (id) => {
    return dispatch => {
        getTodo((response) => dispatch(saveUserTodo(response, id)));
    };
};