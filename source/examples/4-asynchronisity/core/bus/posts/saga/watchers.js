// Core
import { takeEvery } from 'redux-saga/effects';

// Workers
import { fetchPostsAsync } from './workers';

// Types
import { FETCH_POSTS_ASYNC } from '../types';

export function* watchPosts() {
    yield takeEvery(FETCH_POSTS_ASYNC, fetchPostsAsync);
}
