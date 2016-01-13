import { createStore, combineReducers, applyMiddleware } from 'redux';
import raidInfo from './reducers/raidInfo';
import timeSelect from './reducers/timeSelect';
import submitApp from './reducers/submitApp';
import calendarEventList from './reducers/CalendarEventList';
import thunk from 'redux-thunk';


let app = combineReducers({
    raidInfo,
    timeSelect,
    submitApp,
    calendarEventList
});

const createStoreWithMiddleware = applyMiddleware(
    thunk
)(createStore);

let store = createStoreWithMiddleware(app);

export default store