// Core
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// Instruments
import { postsReducer } from '../core/bus/posts/reducer';
import { logger } from '../core/middleware';

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = __DEV__ && devtools ? devtools : compose;

const middleware = [ thunk ];

if (__DEV__) {
    middleware.push(logger);
}

export const store = createStore(
    postsReducer,
    composeEnhancers(applyMiddleware(...middleware)),
);
