// Core
import React, { useState, useEffect } from 'react';

// Instruments
import { fetchPosts, removePost } from '../bus/posts/actions';
import { startFetching, stopFetching } from '../bus/ui/actions';
import { store } from '../init/store';
import { delay } from 'helpers';

export const Feed = () => {
    const [ , forceUpdate ] = useState(true);

    useEffect(() => {
        const unsubscribe = store.subscribe(() => forceUpdate((prevValue) => !prevValue));

        return () => unsubscribe();
    }, []);

    const postsMock = [
        { id: '123', message: '🏴 The black color is the best one!' },
        { id: '456', message: '🏳 No! The white color is the best one!' },
    ];

    const _fetchPosts = async () => {
        store.dispatch(startFetching());
        await delay(2000);
        store.dispatch(fetchPosts(postsMock));
        store.dispatch(stopFetching());
    };

    const _removePost = (postId) => async () => {
        store.dispatch(startFetching());
        await delay(2000);
        store.dispatch(removePost(postId));
        store.dispatch(stopFetching());
    };

    const { posts, ui } = store.getState();

    const postsJSX = posts.map(({ message, id }) => (
        <li
            key = { id }
            onClick = { _removePost(id) }>
            {message}
        </li>
    ));

    const buttonText = ui.isPostsFetching ? 'Загрузка...' : 'Загрузить посты ✓';

    return (
        <section className = 'example'>
            <h1>Стена</h1>
            <br />
            <button
                disabled = { ui.isPostsFetching }
                onClick = { _fetchPosts }>
                {buttonText}
            </button>
            <br />
            <ul>{postsJSX}</ul>
        </section>
    );
};
