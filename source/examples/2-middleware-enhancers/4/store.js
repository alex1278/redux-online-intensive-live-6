// Core
import { createStore, applyMiddleware, compose } from 'redux';

// Instruments
import { postsReducer } from '../core/bus/posts/reducer';
import { logger } from '../core/middleware';

// Environment check
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = __DEV__ && devtools ? devtools : compose;

const middleware = [];

if (__DEV__) {
    middleware.push(logger);
}

// Init store
export const store = createStore(
    postsReducer,
    composeEnhancers(applyMiddleware(...middleware)),
);
