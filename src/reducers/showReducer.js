import { SHOW_CHANGE } from '../constants';

const initialState = {
    poster: '',
    showTitle: '',
    genres: [''],
    year: ''
};

const showFlagReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_CHANGE:
            return {
                ...state,
                poster: action.poster,
                showTitle: action.showTitle,
                genres: action.genres,
                year: action.year
            };
        default:
            return state;
    }
}

export default showFlagReducer;