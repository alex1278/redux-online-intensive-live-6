// Types
import { FETCH_POSTS_ASYNC, FILL_POSTS } from './types';

// Instruments
import { Post } from 'helpers';

export const fillPosts = (posts) => ({
    type:    FILL_POSTS,
    payload: posts,
});

// export const fetchPostsAsync = () => {
//     return async (dispatch, getState, api) => {
//         const response = await fetch(
//             'https://jsonplaceholder.typicode.com/posts',
//         );
//         // const response = await fetch(`${api}/posts`);

//         const result = await response.json();
//         const posts = result.map((post) => new Post(post.title));

//         dispatch(fillPosts(posts));
//     };
// };

export const fetchPostsAsync = () => ({
    type: FETCH_POSTS_ASYNC,
});
