// Instruments
import { store } from './store';
import { createPost, removePost, createPostAsync } from '../core/bus/posts/actions';
import {
    render,
    createPostButton,
    removePostButton,
    createPostAsyncButton,
} from '../core/render';

createPostButton.addEventListener('click', () => {
    store.dispatch(createPost());
});

removePostButton.addEventListener('click', () => {
    const [ firstPost ] = store.getState();

    firstPost && store.dispatch(removePost(firstPost.id));
});

createPostAsyncButton.addEventListener('click', () => {
    store.dispatch(createPostAsync());
});

render(store, 'async')();
store.subscribe(render(store));
