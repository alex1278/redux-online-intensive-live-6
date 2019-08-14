// Instruments
import { store } from './store';
import { createPost } from '../core/bus/posts/actions';
import { render, createPostButton } from '../core/render';

// Create post on click
createPostButton.addEventListener('click', () => {
    store.dispatch(createPost());
});

render(store, 'create')();
store.subscribe(render(store));
