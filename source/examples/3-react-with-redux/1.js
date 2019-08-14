// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Instruments
import { createPost } from './core/bus/posts/actions';

class Feed extends Component {
    _createPost = () => this.props.dispatch(createPost());
    _getPosts = () => {
        return this.props.posts.map((post) => {
            return <li key = { post.id }>{post.comment}</li>;
        });
    };

    render() {
        const postsJSX = this._getPosts();

        return (
            <section className = 'example'>
                <h1>Posts</h1>
                <button onClick = { this._createPost }>Create post</button>
                <ul>{postsJSX}</ul>
            </section>
        );
    }
}

const mapStateToProps = (state /* store.getState() */) => {
    // логика
    return {
        posts: state.posts,
    };
};

const connectToRedux = connect(mapStateToProps /* mapDispatchToProps */);

export const ConnectedFeed = connectToRedux(Feed);
