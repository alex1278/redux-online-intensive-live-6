// Core
import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Instruments
import Styles from './styles.m.css';
import { feedActions } from '../../bus/feed/actions';
import { StarshipTile } from '../StarshipTile';

export const Panel = () => {
    const dispatch = useDispatch();
    const starships = useSelector((state) => state.feed.starships);
    const isFetching = useSelector((state) => state.feed.isFetching);

    const _fetchPostsAsync = () => {
        return dispatch(feedActions.fetchStarshipsAsync());
    };

    const starshipsJSX = starships.map((starship) => {
        return (
            <StarshipTile
                key = { starship.name }
                {...starship}
            />
        )
    });

    const buttonMessage = isFetching
        ? '⏳ Вызываю...'
        : '📲 Вызвать корабли';

    return (
        <section className = { Styles.panel }>
            <h1>🖥</h1>
            <button
                disabled = { isFetching }
                onClick = { _fetchPostsAsync }
            >
                {buttonMessage}
            </button>
            <ul>{ starshipsJSX }</ul>
        </section>
    );
}
