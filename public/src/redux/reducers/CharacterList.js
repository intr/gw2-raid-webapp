import Immutable from 'immutable';

export default (state =Immutable.List([]), action) => {
    switch(action.type) {
        case "ADD_CHARACTER_INFO":
            return state.push(action.info);
        case "REMOVE_CHARACTER_INFO":
            return state.delete(action.index);
        default:
            return state;
    }
}