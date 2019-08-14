// Instruments
import { REMOVE_POST, CREATE_POST } from './types';

const initialState = [{ id: '123', comment: '🐈 Initial comment.' }];

export const postsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CREATE_POST:
            return [ ...state, payload ];

        case REMOVE_POST:
            return state.filter((post) => post.id !== payload);

        default:
            return state;
    }
};
