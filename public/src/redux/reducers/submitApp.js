import Immutable from 'immutable';

export default (state =Immutable.List([]), action) => {
    switch(action.type) {
        default:
            return state;
    }
}