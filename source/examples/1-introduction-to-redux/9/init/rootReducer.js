// Core
import { combineReducers } from 'redux';

// Reducers
import { postsReducer as posts } from './posts';

export const rootReducer = combineReducers({
    posts,
});
