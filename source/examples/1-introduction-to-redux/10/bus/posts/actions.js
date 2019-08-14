// Types
import { FETCH_POSTS, REMOVE_POST } from './types';

export const fetchPosts = (posts) => ({
    type:    FETCH_POSTS,
    payload: posts,
});

export const removePost = (postId) => ({
    type:    REMOVE_POST,
    payload: postId,
});
