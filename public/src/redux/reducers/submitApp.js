import Immutable from 'immutable';

export default (state = Immutable.List([]), action) => {
    switch (action.type) {
        case "SUBMIT_APP":
            console.log(action.app);
            return state;
        default:
            return state;
    }
}