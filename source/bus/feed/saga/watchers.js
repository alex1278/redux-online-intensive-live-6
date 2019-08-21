// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { types } from '../types';

// Workers
import { fetchStarships } from './workers';

function* watchFetchStarships () {
    yield takeEvery(types.FETCH_STARSHIPS_ASYNC, fetchStarships);
}

export function* watchFeed () {
    yield all([call(watchFetchStarships)]);
}
