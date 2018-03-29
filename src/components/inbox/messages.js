import React from 'react'
import {Message} from './message'
import {List} from 'material-ui/List';
export const Messages = ({messages,onClick}) => {
    return (
        <List>
            {messages.map(message => <Message key={message.id} {...message} onClick={onClick.bind(this)}></Message>)}
        </List>
    );
}