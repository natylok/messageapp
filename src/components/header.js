import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import UserService from '../services/userService.js'
import MessageService from '../services/messageService.js'
export default class Header extends Component{
    getHeaderTitle(){
        return UserService.getUserGreetText(this.props.user,MessageService.countUnreadMessages(this.props.messages)) ;
    }
    render(){
        const headerTitle = this.getHeaderTitle();
        return(
            <AppBar iconElementLeft={<div/>} title={headerTitle}>
            </AppBar>
        )
    }
}

