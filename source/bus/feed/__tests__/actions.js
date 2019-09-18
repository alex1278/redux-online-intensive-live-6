// Actions
import { feedActions } from '../actions';

describe('feed actions', () => {
    test('startFetching', () => {
        expect(feedActions.startFetching()).toMatchSnapshot();
    });
    test('stopFetching', () => {
        expect(feedActions.stopFetching()).toMatchSnapshot();
    })
    test('fetchStarshipsAsync', () => {
        expect(feedActions.fetchStarshipsAsync()).toMatchSnapshot();
    })
    test('fillStarships', () => {
        expect(feedActions.fillStarships(__.feedState.starships)).toMatchSnapshot();
    })
});