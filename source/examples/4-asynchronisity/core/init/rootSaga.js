// Core
import { all } from 'redux-saga/effects';

// Watchers
import { watchPosts } from '../bus/posts/saga/watchers';

export function* rootSaga() {
    yield all([ watchPosts() ]);
}
