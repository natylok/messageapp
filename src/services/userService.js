import {NO_MESSAGES_TEXT} from '../constants';
export default class UserService{
    static getUserGreetText(user,unreadMessages){
        unreadMessages = !unreadMessages ? NO_MESSAGES_TEXT : unreadMessages + ' unread messages';
        return user.name + ' - ' + unreadMessages;
    }
}