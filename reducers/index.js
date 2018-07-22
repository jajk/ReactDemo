import { combineReducers } from 'redux-immutable'
import counter from './counter'
import main from './main';
import {reducer as form} from 'redux-form/immutable';

export default combineReducers({
    count: counter,
    name: main,
    form
})