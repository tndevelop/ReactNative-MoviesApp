import { SCHEDULE_CHANGE } from '../constants';

const initialState = {
    scheduleDs: []
};

const scheduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case SCHEDULE_CHANGE:
            return {
                ...state,
                scheduleDs: action.scheduleDs
            };
        default:
            return state;
    }
}

export default scheduleReducer;