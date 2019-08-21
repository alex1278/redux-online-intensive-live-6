// Types
import { types } from './types';

export const feedActions = {
    // Sync
    startFetching: () => {
        return {
            type: types.START_FETCHING,
        };
    },
    stopFetching: () => {
        return {
            type: types.STOP_FETCHING,
        };
    },
    fillStarships: (starships) => {
        return {
            type: types.FILL_STARSHIPS,
            payload: starships,
        };
    },
    // Async
    fetchStarshipsAsync: () => {
        return {
            type: types.FETCH_STARSHIPS_ASYNC,
        };
    },
};
