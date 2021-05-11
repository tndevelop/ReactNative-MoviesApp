import { SHOW_LIST_CHANGE } from '../constants';

const initialState = {
    showsDs: []
};

const showListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LIST_CHANGE:
            return {
                ...state,
                showsDs: action.showsDs
            };
        default:
            return state;
    }
}

export default showListReducer;