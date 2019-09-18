// Core
import { combineReducers, createStore } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as form } from 'redux-form';

// Reducers
import { feedReducer as feed } from '../../bus/feed/reducer';
import { profileReducer as profile } from '../../bus/profile/reducer';

// Instruments
import { history } from '../middleware';

const router = connectRouter(history);

import { store } from '../store';

const referenceRootReducer = combineReducers({
    feed,
    profile,
    router,
    form
})

const referenceStore = createStore(referenceRootReducer);

describe('store', () => {
    test('shoud have a valid state shape', () => {
        expect(store.getState()).toEqual(referenceStore.getState());
    });
});