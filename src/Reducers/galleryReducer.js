import type from '../Constants/galleryConstants'

const initialState = () => ({
    galleryAlbums: [],
    allPhotos: []
});

const setGalleryAlbums = (state, galleryAlbums) => ({...state, galleryAlbums});
const setAllPhotos = (state, allPhotos) => ({...state, allPhotos});

export default (state = initialState(), action) => {
    switch (action.type) {
        case type.FETCH_GALLERY:
            return setGalleryAlbums(state, action.galleryAlbums);
        case type.FETCH_PHOTOS:
            return setAllPhotos(state, action.allPhotos);
        default:
            return state;
    }
};