import React from 'react';
import '../styles/homePage.css';
import RaisedButton from 'material-ui/RaisedButton';
import MessageService from '../services/messageService';
import {withRouter} from 'react-router-dom'
import {PATHS} from '../constants'
const HomePage = ({user,messages,history}) => {
    return (
        <div className="home-page-container">
            <h1>Hello {user.name}</h1>
            <span className="messages-info">{MessageService.getUnreadMessagesText(messages)}</span>
            <RaisedButton className="view-messages-btn" 
                primary={true} 
                label="View Messages"
                onClick={() => {history.push(PATHS.INBOX)}}/>
        </div>
    )
}
export default withRouter(HomePage)