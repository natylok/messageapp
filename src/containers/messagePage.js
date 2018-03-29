import React, {Component} from 'react';
import {connect} from 'react-redux';
import MessageService from '../services/messageService';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import '../styles/messagePage.css'
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import {withRouter} from 'react-router-dom';
import {PATHS} from '../constants';
import {readMessage} from '../actions/messages'
const backButtonStyle={marginTop:'2vw'};
class MessagePage extends Component{
    componentWillMount(){
        let messageId = this.props.match.params.id;
        if(MessageService.messageNotFound(this.props.messages,messageId)){
            this.props.history.push({pathname:'/messageNotFound', messageId:messageId});
        }
        this.props.readMessage(messageId);
    }
    goBackToInbox(){
        this.props.history.push(PATHS.INBOX);
    }
    render(){
        const messageId = this.props.match.params.id;
        const message = MessageService.getMessageById(this.props.messages,messageId);
        if(message){
            const {subject,content} = message;
            return(
                <div className="message-wrapper">
                    <Card className="card-message-container">
                        <CardHeader>
                            <CardTitle title={subject}/>
                        </CardHeader>
                        <Divider/>
                        <CardText>
                            {content}
                        </CardText>
                    </Card>
                    <RaisedButton onClick={this.goBackToInbox.bind(this)} label="Go back to inbox" style={backButtonStyle} secondary={true} />
                </div>
            );
        }
        return null;
    }
}
const mapStateToProps = (state) => {
    return {
        messages: state.messages
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        readMessage: (id) => {dispatch(readMessage(id))}
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MessagePage));