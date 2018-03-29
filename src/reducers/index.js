import { combineReducers } from 'redux'
import {messages} from './messages';
import {user} from './user'
const reducers = combineReducers({
    messages,
    user
});

export default reducers;