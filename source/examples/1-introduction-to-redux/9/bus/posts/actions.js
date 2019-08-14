// Types
import { FETCH_POSTS } from './types';

export const fetchPosts = (posts) => ({
    type:    FETCH_POSTS,
    payload: posts,
});
