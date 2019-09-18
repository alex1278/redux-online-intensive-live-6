// Types
import { types } from './types';

const initialState = {
    firstName: 'Уолтер',
    lastName: 'Уайт',
    isFetching: false,
};

export const profileReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.FILL_PROFILE:
            return {...state, ...payload};
        
        case types.START_FETCHING:
            return {...state, isFetching: true};
                
        case types.STOP_FETCHING:
            return {...state, isFetching: false};

        default:
            return state;
    }
};
