import React from 'react';
import {ListItem} from 'material-ui/List';

export const Message = ({subject,content,isRead,id,onClick}) => {
    const messageStyle = {
        fontWeight: !isRead ? 'bold' : 'normal'
    };
    return (
        <ListItem primaryText={subject} 
            secondaryText={content} 
            style={messageStyle}
            onClick={() => {onClick(id)}}>
        </ListItem>
    );
}