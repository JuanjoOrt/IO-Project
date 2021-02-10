import type from '../Constants/homeConstants'
import {getAlbums, getUsers} from '../Services/servicesCalls/servicesCalls'


export const saveAlbums = (result) => ({
    galleryData: result,
    type: type.FETCH_GALLERY
});

export const saveUsers = (result) => ({
    usersData: result,
    type: type.FETCH_USERS
});

export const saveUserInfo = (result, id) => {
    const userInfo = result.find(user => user.id === id);
    return ({
        userInfo: userInfo,
        type: type.FETCH_USER_INFO
    });
}

export const clearUserInfo = () => ({
    userInfo: {},
    type: type.FETCH_USER_INFO
});


export const fetchGalleryData = () => {
    return dispatch => {
        getAlbums((response) => dispatch(saveAlbums(response)));
    };
};

export const fetchUsersData = () => {
    return dispatch => {
        getUsers((response) => dispatch(saveUsers(response)));
    };
};


export const fetchUserInfo = (id) => {
    return dispatch => {
        getUsers((response) => dispatch(saveUserInfo(response, id)));
    };
};