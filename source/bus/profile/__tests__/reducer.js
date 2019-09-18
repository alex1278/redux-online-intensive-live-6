// Reducer
import { profileReducer } from '../reducer';

// Actions
import { profileActions } from '../actions';

const initialState = {...__.userProfile};

describe('profile reducer', () => {
    test('should return initial state by default', () => {
        expect(profileReducer(void 0, {})).toEqual(initialState);
    });

    test('should handle START_FETCHING action', () => {
        const updatedProfile = { isFetching: true };
        const fullVersionOfProfile = {...initialState, ...updatedProfile};
        expect(profileReducer(void 0, profileActions.startFetching())).toEqual(fullVersionOfProfile);
    });

    test('should handle STOP_FETCHING action', () => {
        const updatedProfile = { isFetching: false };
        const fullVersionOfProfile = {...initialState, ...updatedProfile};
        expect(profileReducer(void 0, profileActions.stopFetching())).toEqual(fullVersionOfProfile);
    });

    test('should handle FILL_PROFILE action', () => {
        const updatedProfile = {
            firstName: 'Walter',
            lastName: 'White',
        };
        const fullVersionOfProfile = {...initialState, ...updatedProfile};
        expect(profileReducer(void 0, profileActions.fillProfile(updatedProfile))).toEqual(fullVersionOfProfile);
    });
});