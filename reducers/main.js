export default function counter(state='', action) {
    switch(action.type){
        case 'typeName':
            return action.name;
        default:
            return state;
    }
}