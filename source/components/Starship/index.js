// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.m.css';

export class Starship extends Component {
    render() {
        return (
            <section
                className = { Styles.starship }
                onClick = { this._navigateToStarship }>
                <h1>🛸</h1>
                <div className = { Styles.description }>
                    Описание космического корабля
                </div>
            </section>
        );
    }
}
