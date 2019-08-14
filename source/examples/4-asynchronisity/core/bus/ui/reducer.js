// Instruments
import { START_FETCHING, STOP_FETCHING } from './types';

const initialState = {
    isFetching: false,
};

export const uiReducer = (state = initialState, { type }) => {
    switch (type) {
        case START_FETCHING:
            return { ...state, isFetching: true };

        case STOP_FETCHING:
            return { ...state, isFetching: false };

        default:
            return state;
    }
};
