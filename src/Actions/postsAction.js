import type from '../Constants/postConstants'
import {getPosts} from '../Services/servicesCalls/servicesCalls'


export const saveUserPosts = (result, id) => {
    const userPosts = []
    result.map(postsItem => {
        if (postsItem.userId === id)
        userPosts.push(postsItem)
    })
    return ({
        userPosts: userPosts,
        type: type.FETCH_USERS_POSTS
    });
}


export const fetchUserPosts = (id) => {
    return dispatch => {
        getPosts((response) => dispatch(saveUserPosts(response, id)));
    };
};