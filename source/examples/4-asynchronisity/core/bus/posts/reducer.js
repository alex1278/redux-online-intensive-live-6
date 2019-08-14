// Instruments
import { FILL_POSTS } from './types';

const initialState = [{ id: '123', comment: '🐈 Initial comment.' }];

export const postsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FILL_POSTS:
            return payload;

        default:
            return state;
    }
};
