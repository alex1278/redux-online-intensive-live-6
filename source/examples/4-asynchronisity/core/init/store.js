// Core
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

// Instruments
import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';
import { logger } from './middleware';

const sagaMiddleware = createSagaMiddleware();
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = __DEV__ && devtools ? devtools : compose;

const middleware = [ sagaMiddleware ];
middleware.push(
    thunk,
    // thunk.withExtraArgument('https://jsonplaceholder.typicode.com'),
);

if (__DEV__) {
    middleware.push(logger);
}

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware)),
);

/*
* Метод run необходимо обязательно запускать после createStore
* */
sagaMiddleware.run(rootSaga);
