// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Instruments
import Styles from './styles.m.css';
import { feedActions } from '../../bus/feed/actions';
import { StarshipTile } from '../StarshipTile';

const mapState = (state) => {
    return {
        starships: state.feed.starships,
        isFetching: state.feed.isFetching,
    }
}

const mapDispatch = {
    fetchStarshipsAsync: feedActions.fetchStarshipsAsync
}

@connect(
    mapState,
    mapDispatch,
)
export class Panel extends Component {
    _fetchPostsAsync = () => {
        console.log(this.props);
        return this.props.fetchStarshipsAsync();
    }

    _getStarships = () => {
        return this.props.starships.map((starship) => {
            return (
                <StarshipTile
                    key = { starship.name }
                    {...starship}
                />
            )
        })
    }

    render() {
        const { isFetching } = this.props;
        const starships = this._getStarships();

        const buttonMessage = isFetching
            ? '⏳ Вызываю...'
            : '📲 Вызвать корабли';

        return (
            <section className = { Styles.panel }>
                <h1>🖥</h1>
                <button
                    disabled = { isFetching }
                    onClick = { this._fetchPostsAsync }
                >
                    {buttonMessage}
                </button>
                <ul>{ starships }</ul>
            </section>
        );
    }
}
