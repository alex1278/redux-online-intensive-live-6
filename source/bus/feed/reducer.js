// Instruments
import { FILL_STARSHIPS } from './types';

const initialState = {
    starships: [],
};

export const feedReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FILL_STARSHIPS:
            return { ...state, starships: payload };

        default:
            return state;
    }
};
