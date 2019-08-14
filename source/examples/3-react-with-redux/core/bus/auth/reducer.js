// Instruments
import { AUTHENTICATE } from './types';

const initialState = {
    isAuthenticated: false,
};

export const authReducer = (state = initialState, { type }) => {
    switch (type) {
        case AUTHENTICATE:
            return {
                ...state,
                isAuthenticated: true,
            };

        default:
            return state;
    }
};
