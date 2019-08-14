// Types
import { FILL_PROFILE } from './types';

export const fillProfile = (profile) => ({
    type:    FILL_PROFILE,
    payload: profile,
});
