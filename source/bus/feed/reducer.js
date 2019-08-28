// Types
import { types } from './types';

const initialState = {
    starships: [],
    isFetching: false,
};

export const feedReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.START_FETCHING:
                return {...state, isFetching: true};
                
        case types.STOP_FETCHING:
            return {...state, isFetching: false};

        case types.FILL_STARSHIPS:
            return {...state, starships: payload};

        default:
            return state;
    }
};
