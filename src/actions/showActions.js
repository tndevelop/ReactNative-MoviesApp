import { SHOW_CHANGE } from '../constants';
import { SCHEDULE_CHANGE } from '../constants';
import { SHOW_LIST_CHANGE } from '../constants';

export function changeShow(poster, showTitle, genres, year) {
    return {
        type: SHOW_CHANGE,
        poster: poster,
        showTitle: showTitle,
        genres: genres,
        year: year
    }
}

export function changeSchedule(scheduleDs) {
    return {
        type: SCHEDULE_CHANGE,
        scheduleDs: scheduleDs
    }
}

export function changeShowList(showsDs) {
    return {
        type: SHOW_LIST_CHANGE,
        showsDs: showsDs
    }
}