import type from '../Constants/postConstants'

const initialState = () => ({
    userPosts: []
});

const setUserPost = (state, userPosts) => ({...state, userPosts});

export default (state = initialState(), action) => {
    switch (action.type) {
        case type.FETCH_USERS_POSTS:
            return setUserPost(state, action.userPosts);
        default:
            return state;
    }
};