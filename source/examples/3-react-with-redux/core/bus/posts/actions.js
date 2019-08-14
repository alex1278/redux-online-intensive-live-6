// Types
import { REMOVE_POST, CREATE_POST, NOOP } from './types';

// Instruments
import { Post } from 'helpers';

export const removePost = (postId) => ({
    type:    REMOVE_POST,
    payload: postId,
});

export const createPost = (message) => ({
    type:    CREATE_POST,
    payload: new Post(message),
});

export const noop = () => ({
    type: NOOP,
});
