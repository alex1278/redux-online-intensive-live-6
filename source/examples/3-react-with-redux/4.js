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
                onClick = { () => props.actions.removePost(post.id) }>
                {post.comment}
            </li>
        );
    });

    return (
        <section className = 'example'>
            <h1>Posts</h1>
            <button onClick = { () => props.actions.createPost() }>
                Create post
            </button>
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
    createPost,
    removePost,
};

const mergeProps = (
    state /* mapState return value */,
    actions /* mapDispatch return value */,
) => {
    return {
        ...state,
        actions,
    };
};

export const ConnectedFeed = connect(
    mapState,
    mapDispatch,
    mergeProps,
)(Feed);
