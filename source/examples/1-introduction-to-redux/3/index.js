/* AC − это аббревиатура от «Action Creator» */
export const removePostAC = (postId) => ({
    type:    'REMOVE_POST',
    payload: postId,
});
