import {SET_MESSAGES_DATA, READ_MESSAGE} from '../constants'
export const messages = (state=[], action) => {
    switch(action.type){
        case SET_MESSAGES_DATA:
            return [...state,...action.messages];
        case READ_MESSAGE:
            return state.map(message => 
                message.id === parseInt(action.messageId, 10) ? {...message, isRead:true } 
                : message);
        default:
            return state;
    }
}