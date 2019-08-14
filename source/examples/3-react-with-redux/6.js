// Core
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Instruments
import * as postsActions from './core/bus/posts/actions';
import * as authActions from './core/bus/auth/actions';
import { log } from 'helpers';

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

    log('→ render', 'red');

    return (
        <section className = 'example'>
            <h1>Posts</h1>
            <button onClick = { () => props.actions.createPost() }>
                Create post
            </button>
            <button onClick = { () => props.actions.noop() }>Fake action</button>
            <button onClick = { () => props.actions.authenticate() }>
                Authenticate
            </button>
            <ul>{postsJSX}</ul>
        </section>
    );
};

// oldState === newState
const mapState = (state) => {
    log('→ mapState', 'cornflowerblue');

    // prevReturnValue !== newReturnValue
    return {
        posts: state.posts,
    };
};

const mapDispatch = (dispatch) => {
    log('→ mapDispatch', 'rebeccapurple');

    return {
        actions: bindActionCreators(
            { ...postsActions, ...authActions },
            dispatch,
        ),
    };
};

const mergeProps = (state, actions) => {
    log('→ mergeProps', 'lime');

    return {
        ...state,
        ...actions,
    };
};

const options = {
    // pure: true,
    // areStatesEqual
    // areOwnPropsEqual
    // areStatePropsEqual
    // areMergedPropsEqual
    // storeKey
};

export const ConnectedFeed = connect(
    mapState,
    mapDispatch,
    mergeProps,
    options,
)(Feed);
