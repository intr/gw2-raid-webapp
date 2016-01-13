import Immutable from 'immutable';

export default (state =Immutable.List([]), action) => {
    switch(action.type) {
        case "ADD_CALENDAR_EVENT":
            return state.push(action.info);
        case "REMOVE_CALENDAR_EVENT":
            return state.delete(action.index);
        default:
            return state;
    }
}