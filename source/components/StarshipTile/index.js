// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Instruments
import Styles from './styles.m.css';

@connect(
    state => ({ profile: state.profile })
)
export class StarshipTile extends Component {
    render() {
        const {
            name,
            starship_class,
            manufacturer,
            crew
        } = this.props;

        return (
            <section
                className={Styles.starshipTile}
            >
                <h1>🛸</h1>
                <div className={Styles.description}>
                    <div>
                        <span>Имя:</span>
                        <span>
                            &nbsp;
                            {name}
                        </span>
                    </div>
                    <div>
                        <span>Класс:</span>
                        <span>
                            &nbsp;
                            {starship_class}
                        </span>
                    </div>
                    <div>
                        <span>Производитель:</span>
                        <span>
                            &nbsp;
                            {manufacturer}
                        </span>
                    </div>
                    <div>
                        <span>Команда:</span>
                        <span>
                            &nbsp;
                            {crew}
                        </span>
                    </div>
                </div>
            </section>
        );
    }
}
