// Core
import React from 'react';
import { connect } from 'react-redux';

// Instruments
import { createPost, removePost } from './core/bus/posts/actions';

const Feed = (props) => {
    const postsJSX = props.posts.map((post) => {
        return (
            <li
                key = { post.id }
                onClick = { () => props.removePost(post.id) }>
                {post.comment}
            </li>
        );
    });

    return (
        <section className = 'example'>
            <h1>Posts</h1>
            <button onClick = { () => props.createPost() }>Create post</button>
            <ul>{postsJSX}</ul>
        </section>
    );
};

const mapState = (state) => {
    return {
        posts: state.posts,
    };
};

const mapDispatch = {
    createPost, // createPost: (...params) => store.dispatch(createPost(...params))
    removePost, // removePost: (...params) => store.dispatch(removePost(...params))
};

export const ConnectedFeed = connect(
    mapState,
    mapDispatch,
)(Feed);
