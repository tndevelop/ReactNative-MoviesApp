import { createStore, combineReducers } from 'redux';
import showFlagReducer from '../src/reducers/showReducer';
import scheduleReducer from '../src/reducers/scheduleReducer';
import showListReducer from '../src/reducers/showListReducer';

const rootReducer = combineReducers(
    {
        show: showFlagReducer,
        schedule: scheduleReducer,
        showList: showListReducer
    }
);

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;