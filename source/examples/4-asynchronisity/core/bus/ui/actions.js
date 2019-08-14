// Types
import { EMIT_ERROR, START_FETCHING, STOP_FETCHING } from './types';

export const emitError = (error, meta) => ({
    type:    EMIT_ERROR,
    payload: error,
    error:   true,
    meta,
});

export const startFetching = () => ({
    type: START_FETCHING,
});

export const stopFetching = () => ({
    type: STOP_FETCHING,
});
