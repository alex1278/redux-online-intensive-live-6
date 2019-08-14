// Core
import { call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';

// Instruments
import { fillPosts } from '../../actions';
import { startFetching, stopFetching, emitError } from '../../../ui/actions';
import { Post } from 'helpers';

export function* fetchPostsAsync() {
    try {
        yield put(startFetching());
        const response = yield call(
            fetch,
            'https://jsonplaceholder.typicode.com/posts',
        );

        const result = yield call([ response, response.json ]);

        if (response.status !== 200) {
            throw new Error('Failed to load posts');
        }

        const posts = result.map((post) => new Post(post.title));

        yield delay(3000);
        yield put(fillPosts(posts));
    } catch (error) {
        yield put(emitError(error, 'fetchPostsAsync'));
    } finally {
        yield put(stopFetching());
    }
}
