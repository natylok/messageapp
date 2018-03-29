import _ from 'lodash';
export default class MessageService{
    static countUnreadMessages(messages){
        return _.filter(messages,message => !message.isRead).length;
    }
    static getUnreadMessagesText(messages){
        return `You have ${this.countUnreadMessages(messages)} messages out of ${messages.length} total`;
    }
    static getMessageById(messages,id){
        return _.find(messages, message => message.id === parseInt(id,10));
    }
    static messageNotFound(messages,id){
        return !(!!this.getMessageById(messages,id));
    }
}