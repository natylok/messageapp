import React from 'react';
import {withRouter} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import {PAGE_NOT_FOUND,GO_TO_HOMEPAGE} from '../constants';
const NotFoundPage = (props) => {
    const messageId = props.location.messageId;
    const notFoundText =  messageId ? `Message ${messageId} not found`: PAGE_NOT_FOUND;
    return(
        <div>
            <h2>{notFoundText}</h2>
            <RaisedButton label={GO_TO_HOMEPAGE} onClick={() => {props.history.push('/')}} secondary={true}  />
        </div>
    )
}
export default withRouter(NotFoundPage);