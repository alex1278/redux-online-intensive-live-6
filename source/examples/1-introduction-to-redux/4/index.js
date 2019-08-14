// types.js
export const REMOVE_POST = 'REMOVE_POST';

// actions.js
export const removePost = (postId) => ({
    type:    REMOVE_POST,
    payload: postId,
});
