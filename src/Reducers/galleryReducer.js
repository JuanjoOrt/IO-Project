import type from '../Constants/galleryConstants'

const _initialState = () => ({
    test: 'test',
});

const _setData = (state, {dataAppleDaily}) => ({...state, dataAppleDaily});

export default (state = _initialState(), action) => {
    switch (action.type) {
        case type.FETCH_GALLERY:
            return _setData(state, action);
        default:
            return state;
    }
};