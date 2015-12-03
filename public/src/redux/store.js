import { createStore, combineReducers, applyMiddleware } from 'redux';
import raidInfo from './reducers/raidInfo';
import timeSelect from './reducers/timeSelect';
import submitApp from './reducers/submitApp';
import characterList from './reducers/CharacterList';
import thunk from 'redux-thunk';


let app = combineReducers({
    raidInfo,
    timeSelect,
    submitApp,
    characterList
});

const createStoreWithMiddleware = applyMiddleware(
    thunk
)(createStore);

let store = createStoreWithMiddleware(app);

export default store