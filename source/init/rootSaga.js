// Core
import { all } from 'redux-saga/effects';

// Watchers
import { watchFeed } from '../bus/feed/saga/watchers';

export function* rootSaga() {
    yield all([ watchFeed() ]);
}