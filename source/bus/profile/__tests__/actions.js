// Actions
import { profileActions } from '../actions';

// Types
import { types } from '../types';

describe('profile actions', () => {
    test('fillProfile', () => {
        expect(profileActions.fillProfile(__.userProfile)).toEqual({
            type: types.FILL_PROFILE,
            payload: __.userProfile
        })
    });

    test('startFetching', () => {
        expect(profileActions.startFetching()).toEqual({
            type: types.START_FETCHING
        })
    });

    test('stopFetching', () => {
        expect(profileActions.stopFetching()).toEqual({
            type: types.STOP_FETCHING
        })
    });
});