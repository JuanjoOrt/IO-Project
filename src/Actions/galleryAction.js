import type from '../Constants/galleryConstants'
import {getAlbums} from '../Services/servicesGallery/servicesGallery'

export const saveAlbums = (Result) => {
    return ({
        galleryData: Result,
        type: type.FETCH_GALLERY
    });
}

export const fetchGalleryData = () => {
    return dispatch => {
        getAlbums((response) => dispatch(saveAlbums(response)));
    };
};