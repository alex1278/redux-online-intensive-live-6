// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.m.css';

export class Profile extends Component {
    static defaultProps = {
        profile: {
            firstName: 'имя',
            lastName:  'фамилия',
        },
    };

    render() {
        const {
            profile: { firstName, lastName },
        } = this.props;

        return (
            <section className = { Styles.profile }>
                <h1>
                    👩🏼‍🚀 {firstName} {lastName}
                </h1>
                <form>Форма редактирования профиля</form>
            </section>
        );
    }
}
