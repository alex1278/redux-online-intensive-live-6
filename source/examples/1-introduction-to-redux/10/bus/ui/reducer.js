// Types
import { START_FETCHING, STOP_FETCHING } from './types';

const initialState = {
    isPostsFetching: false,
};

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_FETCHING:
            return {
                ...state,
                isPostsFetching: true,
            };

        case STOP_FETCHING:
            return {
                ...state,
                isPostsFetching: false,
            };

        default:
            return state;
    }
};
