// Instruments
import { store } from './store';
import { createPost, removePost } from '../core/bus/posts/actions';
import { render, createPostButton, removePostButton } from '../core/render';

// Create post on click
createPostButton.addEventListener('click', () => {
    store.dispatch(createPost());
});

// Remove post on click
removePostButton.addEventListener('click', () => {
    const [ firstPost ] = store.getState();

    firstPost && store.dispatch(removePost(firstPost.id));
});

render(store, 'normal')();
store.subscribe(render(store));
