import { fromJS } from 'immutable';

export default function counter(state = fromJS([{"name":"*","write":false}]), action) {
    switch(action.type){
        case 'fieldArrayDemo':
            return fromJS(action.data);
        default:
            return state;
    }
}