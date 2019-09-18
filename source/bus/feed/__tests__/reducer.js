// Reducer
import { feedReducer } from "../reducer";

// Actions
import { feedActions } from "../actions";

describe("feed reducer", () => {
  test("should return initial state by default", () => {
    expect(feedReducer(void 0, {})).toMatchInlineSnapshot(`
      Object {
        "isFetching": false,
        "starships": Array [],
      }
    `);
  });
  test("should handle START_FETCHING action", () => {
    expect(feedReducer(void 0, feedActions.startFetching()))
      .toMatchInlineSnapshot(`
      Object {
        "isFetching": true,
        "starships": Array [],
      }
    `);
  });
  test("should handle STOP_FETCHING action", () => {
    expect(feedReducer(void 0, feedActions.stopFetching()))
      .toMatchInlineSnapshot(`
      Object {
        "isFetching": false,
        "starships": Array [],
      }
    `);
  });
  test("should handle FILL_STARSHIPS action", () => {
    expect(
      feedReducer(void 0, feedActions.fillStarships(__.feedState.starships))
    ).toMatchInlineSnapshot(`
      Object {
        "isFetching": false,
        "starships": Array [],
      }
    `);
  });
});
