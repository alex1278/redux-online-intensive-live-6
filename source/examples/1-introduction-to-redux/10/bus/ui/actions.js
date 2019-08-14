// Types
import { START_FETCHING, STOP_FETCHING } from './types';

export const startFetching = () => ({
    type: START_FETCHING,
});

export const stopFetching = () => ({
    type: STOP_FETCHING,
});
