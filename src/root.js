import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter, Route , Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import {setUserData} from './actions/user';
import {setMessagesData} from './actions/messages';
import DataService from './services/dataService';
import Header from './components/header';
import InboxPage from './containers/inboxPage';
import HomePage from './components/homePage';
import MessagePage from './containers/messagePage';
import NotFoundPage from './components/notFoundPage';
import {PATHS} from './constants'
import './styles/root.css'
class Root extends Component{
    componentWillMount(){
        DataService.setData();
        this.props.setApplicationData(DataService.getUserData(), DataService.getMessagesData());
    }
    render(){
        return(
            <MuiThemeProvider> 
                <BrowserRouter>
                    <div className="container">
                        <Header messages={this.props.messages} user={this.props.user}/>
                        <Switch>
                            <Route exact path="/" render={() => <HomePage {...this.props}/>} /> 
                            <Route exact path={PATHS.INBOX} render={() => <InboxPage messages={this.props.messages}/>}/>
                            <Route exact path="/messages/:id" component={MessagePage} /> 
                            <Route exact path="*" component={NotFoundPage} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </MuiThemeProvider>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        messages:state.messages,
        user:state.user
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        setApplicationData: (userData,messagesData) => {
            dispatch(setUserData(userData));
            dispatch(setMessagesData(messagesData));
        }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Root);