// Types
import { REMOVE_POST, CREATE_POST } from '../core/bus/posts/types';

// Instruments
import { Post } from 'helpers';

const initialState = [{ id: '123', comment: 'Second reducer comment.' }];

export const appendReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CREATE_POST:
            return [ ...state, new Post('👇🏼 Appended Post') ];

        case REMOVE_POST:
            return state.filter((post) => post.id !== payload);

        default:
            return state;
    }
};
