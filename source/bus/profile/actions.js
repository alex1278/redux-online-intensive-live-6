// Types
import { types } from './types';

export const profileActions = {
    // Sync
    fillProfile: (profile) => {
        return {
            type: types.FILL_PROFILE,
            payload: profile
        };
    },
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
};
