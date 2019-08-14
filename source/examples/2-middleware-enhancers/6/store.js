// Core
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Instruments
import { prependReducer } from './prependReducer';
import { logger } from '../core/middleware';

const middleware = [ thunk ];

if (__DEV__) {
    middleware.push(logger);
}

export const store = createStore(
    prependReducer,
    applyMiddleware(...middleware),
);
