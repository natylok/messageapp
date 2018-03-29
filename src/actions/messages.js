import {SET_MESSAGES_DATA, READ_MESSAGE} from '../constants';
export const setMessagesData = (messages) => {
    return {
        type: SET_MESSAGES_DATA,
        messages
    };
}
export const readMessage = (messageId) => {
    return {
        type: READ_MESSAGE,
        messageId
    }
}