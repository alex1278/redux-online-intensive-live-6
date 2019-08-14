// Types
import { REMOVE_POST_ASYNC, REMOVE_POST } from './types';

export const removePostAsync = (postId) => ({
    type:    REMOVE_POST_ASYNC,
    payload: postId,
});

export const removePost = (postId) => ({
    type:    REMOVE_POST,
    payload: postId,
});

/* 1. Вызвать removePostAsync(postId) */
/* 2. Выполнить асинхронные операции */
/* 3. Вызвать removePost(postId) */
