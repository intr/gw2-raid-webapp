import Immutable from 'immutable';

export default (state = Immutable.Map({Dps: false, Tank: false, Healer: false, Elementalist: false, Engineer: false, Guardian: false, Mesmer: false, Necromancer: false, Ranger: false, Revenant: false, Thief: false, Warrior: false}), action) => {
    switch(action.type) {
        case "ADD_ROLE":
            return state.set(action.role,!state.get(action.role));
        case "ADD_CLASS":
            return state.set(action.Gwclass,!state.get(action.Gwclass));
        case "ADD_USERNAME":
            return state.set('username',action.username);
        default:
            return state;
    }
}