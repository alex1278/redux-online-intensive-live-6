// Types
import { FILL_STARSHIPS } from './types';

export const fillStarships = (starships) => ({
    type:    FILL_STARSHIPS,
    payload: starships,
});
