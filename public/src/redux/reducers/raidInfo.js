import Immutable from 'immutable';

export default (state =Immutable.Map({Dps: false, Tank: false, Healer: false, class: "Elementalist"}), action) => {
    switch(action.type) {
        case "ADD_ROLE":
            return state.set(action.role,!state.get(action.role));
        case "ADD_CLASS":
            return state.set('class',action.Gwclass);
        case "ADD_USERNAME":
            return state.set('username',action.username);
        default:
            return state;
    }
}