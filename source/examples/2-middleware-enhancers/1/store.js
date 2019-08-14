// Core
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

// Instruments
import { postsReducer } from '../core/bus/posts/reducer';

// This is a middleware
const logger = createLogger({
    duration:  true,
    collapsed: true,
    colors:    {
        title: (action) => {
            return action.error ? 'firebrick' : 'deepskyblue';
        },
        prevState: () => '#1C5FAF',
        action:    () => '#149945',
        nextState: () => '#A47104',
        error:     () => '#ff0005',
    },
});

export const store = createStore(postsReducer, applyMiddleware(logger));
