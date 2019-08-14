// Core
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';

// Instruments
import { fetchPostsAsync } from './core/bus/posts/actions';
import { store } from './core/init/store';

const mapState = (state) => {
    return {
        posts:      state.posts,
        isFetching: state.ui.isFetching,
    };
};

const mapDispatch = {
    fetchPostsAsync,
};

export const ConnectedFeed = connect(
    mapState,
    mapDispatch,
)(
    class Feed extends Component {
        _fetchPostsAsync = () => this.props.fetchPostsAsync();
        _getPosts = () => {
            return this.props.posts.map((post) => {
                return <li key = { post.id }>{post.comment}</li>;
            });
        };

        render() {
            const { isFetching } = this.props;
            const posts = this._getPosts();

            const buttonMessage = isFetching ? 'Fetching...' : 'Fetch posts';

            return (
                <section className = 'example'>
                    <h1>Posts</h1>
                    <button
                        disabled = { isFetching }
                        onClick = { this._fetchPostsAsync }>
                        {buttonMessage}
                    </button>
                    <ul>{posts}</ul>
                </section>
            );
        }
    },
);

render(
    <Provider store = { store }>
        <ConnectedFeed />
    </Provider>,
    document.getElementById('app'),
);
