// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

// Instruments
import Styles from './styles.m.css';
import observatory from './observatory.jpg';
import { book } from '../../routes/book';

@connect(
    (state) => ({ profile: state.profile }),
    { push }
)
export class Bridge extends Component {
    render() {
        const { profile } = this.props;

        return (
            <section className = { Styles.bridge }>
                <h1>
                    Добро пожаловать на борт, {profile.firstName}
                    &nbsp;
                    {profile.lastName}!
                </h1>
                <img src = { observatory } />
                <button>🖥 &nbsp;Контрольная панель</button>
            </section>
        );
    }
}
