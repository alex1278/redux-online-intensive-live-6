// Types
import * as types from './types';

/* FSA — Flux Standard Action */

export const removePost = (postId /* идентификатор поста для удаления... */) => ({
    type:    types.REMOVE_POST,
    payload: postId,
});

export const removePostSuccess = (
    postId /* post id to be deleted... */,
    meta /* additional info... */,
) => ({
    type:    types.REMOVE_POST_SUCCESS,
    payload: postId,
    meta,
});

export const removePostFail = (error /* объект с ошибкой... */) => ({
    type:    types.REMOVE_POST_FAIL,
    payload: error,
    error:   true,
});

/* 1. Вызов removePost(postId) */
/* 2. Выполнить асинхронные операции */
/* 3. Вызвать removePostSuccess(postId, meta) или removePostFail(error) */
