import type from '../Constants/galleryConstants'
import {getAlbums, getPhotos} from '../Services/servicesCalls/servicesCalls'


export const saveUserAlbums = (result, id) => {
    const userAlbums = result.filter(album => album.userId === id)
    return ({
        galleryAlbums: userAlbums,
        type: type.FETCH_GALLERY
    });
}

export const saveAllPhotos = (result) => ({
    allPhotos: result,
    type: type.FETCH_PHOTOS
});



export const fetchUserAlbums = (id) => {
    return dispatch => {
        getAlbums((response) => dispatch(saveUserAlbums(response, id)));
    };
};

export const fetchAllPhotos = () => {
    return dispatch => {
        getPhotos((response) => dispatch(saveAllPhotos(response)));
    };
};
