// Core
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Instruments
import * as actions from './core/bus/posts/actions';

const mapState = (state) => {
    return {
        posts: state.posts,
    };
};

const mapDispatch = (dispatch) => {
    return {
        actions: bindActionCreators(
            {
                createPost: actions.createPost, // createPost: (...params) => dispatch(actions.createPost(...params))
                removePost: actions.removePost, // removePost: (...params) => dispatch(actions.removePost(...params))
            },
            dispatch,
        ),
    };
};

export const ConnectedFeed = connect(
    mapState,
    mapDispatch,
)((props) => {
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
});
