// Core
import { createStore, applyMiddleware, compose } from 'redux';

// Instruments
import { rootReducer } from './rootReducer';
import { logger } from './middleware';

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = __DEV__ && devtools ? devtools : compose;

const middleware = [];

if (__DEV__) {
    middleware.push(logger);
}

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware)),
);
