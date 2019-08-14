// Core
import { createStore, applyMiddleware } from 'redux';

// Instruments
import { postsReducer } from '../core/bus/posts/reducer';
import { REMOVE_POST } from '../core/bus/posts/types';
import { logger } from '../core/middleware';

const createLimitationMiddleware = (limit = 5) => (store) => (next) => (action) => {
    if (action.type === REMOVE_POST) {
        console.log('→ limitation middleware');
        next(action);
    } else if (store.getState().length < limit) {
        console.log('→ limitation middleware');
        next(action);
    } else {
        console.log(`There are ${limit} posts already.`);
    }
};

const log = () => (next) => (action) => {
    console.log('→ log');

    next(action);
};

const middleware = [ createLimitationMiddleware(5), log ];

if (__DEV__) {
    middleware.push(logger);
}

export const store = createStore(postsReducer, applyMiddleware(...middleware));
