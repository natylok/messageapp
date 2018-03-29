import {SET_USER_DATA} from '../constants'
export const user = (state={}, action) => {
    switch(action.type){
        case SET_USER_DATA:
            return Object.assign({},state,action.user);
        default:
            return state;
    }
}