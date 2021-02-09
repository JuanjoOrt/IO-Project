import type from '../Constants/galleryConstants'

const initialState = () => ({
    galleryData: [],
});

const setGalleryData = (state, galleryData) => ({...state, galleryData});

export default (state = initialState(), action) => {
    switch (action.type) {
        case type.FETCH_GALLERY:
            return setGalleryData(state, action.galleryData);
        default:
            return state;
    }
};