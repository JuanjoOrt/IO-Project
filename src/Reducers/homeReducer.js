import type from '../Constants/homeConstants'

const initialState = () => ({
    usersData: [],
    userInfo: {}
});

const setUsersData = (state, usersData) => ({...state, usersData});
const setUserInfo = (state, userInfo) => ({...state, userInfo});

export default (state = initialState(), action) => {
    switch (action.type) {
        case type.FETCH_USERS:
            return setUsersData(state, action.usersData);
        case type.FETCH_USER_INFO:
            return setUserInfo(state, action.userInfo);
        default:
            return state;
    }
};