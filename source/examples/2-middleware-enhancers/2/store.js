// Core
import { createStore, applyMiddleware } from 'redux';

// Instruments
import { postsReducer } from '../core/bus/posts/reducer';

// A logger middleware
const logger = (store) => {
    return (next) => {
        return (action) => {
            const stateBefore = store.getState();

            next(action);

            const stateAfter = store.getState();

            console.log('→ State before:', stateBefore);
            console.log('→ Action:', action);
            console.log('→ State after:', stateAfter);
            console.log('———');
        };
    };
};

export const store = createStore(postsReducer, applyMiddleware(logger));
