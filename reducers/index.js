import { combineReducers } from 'redux-immutable'
import fieldArrayDemo from './fieldArrayDemo';
import {reducer as form} from 'redux-form/immutable';

export default combineReducers({
    services: fieldArrayDemo,
    form
})