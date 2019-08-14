// Core
import { takeEvery } from 'redux-saga/effects';

// Workers
import { fetchStarshipsAsync } from './workers';

// Types
import { FETCH_STARSHIPS_ASYNC } from '../types';

export function* watchFeed() {
    yield takeEvery(FETCH_STARSHIPS_ASYNC, fetchStarshipsAsync);
}
