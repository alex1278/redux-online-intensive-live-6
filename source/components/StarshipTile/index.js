// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.m.css';

export class StarshipTile extends Component {
    render() {
        return (
            <section className = { Styles.starshipTile }>
                <h1>🛸</h1>
                <div className = { Styles.description }>
                    Описание космического корабля
                </div>
            </section>
        );
    }
}
