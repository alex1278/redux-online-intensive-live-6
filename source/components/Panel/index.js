// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.m.css';

export class Panel extends Component {
    static defaultProps = {
        isFetching: false,
    };

    render() {
        const { isFetching } = this.props;

        const buttonMessage = isFetching
            ? '⏳ Вызываю...'
            : '📲 Вызвать корабли';

        return (
            <section className = { Styles.panel }>
                <h1>🖥</h1>
                <button disabled = { isFetching }>{buttonMessage}</button>
                <ul>Список космических кораблей</ul>
            </section>
        );
    }
}
