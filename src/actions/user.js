import {SET_USER_DATA} from '../constants';
export const setUserData = (user) => {
    return {
        type: SET_USER_DATA,
        user
    };
} 