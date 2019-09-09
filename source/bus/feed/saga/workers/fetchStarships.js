// Core
import { put, call, delay } from 'redux-saga/effects';

// Instruments
import { feedActions } from '../../actions';

export function* fetchStarships () {
    try {
        yield put(feedActions.startFetching());

        const response = yield call(fetch, 'https://swapi.co/api/starships');
        
        const { results } = yield call([response, response.json]);

        if (response.status !== 200) {
            throw new Error(`We can't receive starships 😢`);
        }

        yield delay(200);
        yield put(feedActions.fillStarships(results));
    } catch (error) {
        console.log('fetchStarshipsAsync', error);
    } finally {
        yield put(feedActions.stopFetching());
    }
}
