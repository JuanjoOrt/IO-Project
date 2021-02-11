import type from '../Constants/postConstants'

const initialState = () => ({
    userPosts: [],
    comments: []
});

const setUserPost = (state, userPosts) => ({...state, userPosts});
const setComments = (state, comments) => ({...state, comments});

export default (state = initialState(), action) => {
    switch (action.type) {
        case type.FETCH_USERS_POSTS:
            return setUserPost(state, action.userPosts);
        case type.FETCH_USERS_COMMENTS:
            return setComments(state, action.comments);
        default:
            return state;
    }
};