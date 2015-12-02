import { createStore, combineReducers } from 'redux';
import raidInfo from './reducers/raidInfo';
import timeSelect from './reducers/timeSelect';
import submitApp from './reducers/submitApp';
import characterList from './reducers/CharacterList';

let app = combineReducers({
    raidInfo,
    timeSelect,
    submitApp,
    characterList
});

let store = createStore(app);

export default store