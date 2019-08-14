// Types
import { REMOVE_POST, CREATE_POST } from './types';

// Instruments
import { delay, Post } from 'helpers';

export const removePost = (postId) => ({
    type:    REMOVE_POST,
    payload: postId,
});

export const createPost = (message) => ({
    type:    CREATE_POST,
    payload: new Post(message),
});

export const createPostAsync = () => {
    return async (dispatch) => {
        const response = await fetch('http://date.jsontest.com/');
        const { time } = await response.json();

        await delay();

        dispatch(createPost(`⌚️ Сейчас: ${time}.`));
    };
};
