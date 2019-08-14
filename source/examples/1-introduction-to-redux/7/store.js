// Core
import { createStore } from 'redux';

const initialState = [
    { id: '123', message: '🏴 The black color is the best one!' },
    { id: '456', message: '🏳 No! The white color is the best one!' },
];

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_POST':
            return [ action.payload, ...state ];

        case 'REMOVE_POST':
            return state.filter((post) => post.id !== action.payload);

        default:
            return state;
    }
};

export const store = createStore(
    postsReducer /* persisted state */ /* middleware */,
);
