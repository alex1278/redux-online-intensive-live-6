// Instruments
import { store } from './store';
import { createPost } from '../core/bus/posts/actions';
import {
    render,
    prependReducerButton,
    appendReducerButton,
} from '../core/render';
import { prependReducer } from './prependReducer';
import { appendReducer } from './appendReducer';

prependReducerButton.addEventListener('click', () => {
    store.replaceReducer(prependReducer);

    store.dispatch(createPost());
});

appendReducerButton.addEventListener('click', () => {
    store.replaceReducer(appendReducer);

    store.dispatch(createPost());
});

render(store, 'replaceReducer')();
store.subscribe(render(store));
