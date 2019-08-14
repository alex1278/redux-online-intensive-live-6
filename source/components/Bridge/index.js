// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.m.css';
import observatory from './observatory.jpg';

export class Bridge extends Component {
    static defaultProps = {
        profile: {
            firstName: 'имя',
            lastName:  'фамилия',
        },
    };

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
