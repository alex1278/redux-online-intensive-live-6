// Types
import { FETCH_POSTS, REMOVE_POST } from './types';

const initialState = [];

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return action.payload;

        case REMOVE_POST:
            return state.filter((post) => post.id !== action.payload);

        default:
            return state;
    }
};
