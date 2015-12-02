import { createStore, combineReducers } from 'redux';
import raidInfo from './reducers/raidInfo';
import timeSelect from './reducers/timeSelect';
import submitApp from './reducers/submitApp';

let app = combineReducers({
    raidInfo,
    timeSelect,
    submitApp
});

let store = createStore(app);

export default store