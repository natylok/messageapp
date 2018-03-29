import React, {Component} from 'react';
import Divider from 'material-ui/Divider';
import {Messages} from '../components/inbox/messages'
import {withRouter} from 'react-router-dom'

class InboxPage extends Component{
    redirectToMessage(messageId){
        this.props.history.push('messages/' + messageId);
    }
    render(){
        return(
            <div>
                <h3>Messages</h3>
                <Divider/>
                <Messages messages={this.props.messages} onClick={this.redirectToMessage.bind(this)}/>
            </div>
        )
    }
}
export default withRouter(InboxPage)