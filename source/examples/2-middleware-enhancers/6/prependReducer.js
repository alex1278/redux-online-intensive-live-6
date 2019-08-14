// Types
import { REMOVE_POST, CREATE_POST } from '../core/bus/posts/types';

// Instruments
import { Post } from 'helpers';

const initialState = [{ id: '123', comment: 'first reducer comment.' }];

export const prependReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CREATE_POST:
            return [ new Post('☝🏼 Prepended post'), ...state ];

        case REMOVE_POST:
            return state.filter((post) => post.id !== payload);

        default:
            return state;
    }
};
