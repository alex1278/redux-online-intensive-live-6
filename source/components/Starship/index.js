// Core
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Instruments
import Styles from './styles.m.css';

export const Starship = () => {
    const dispatch = useDispatch();
    const starships = useSelector((state) => state.feed.starships);

    if(!starships.length) {
        return false;
    }

    const {
        name,
        starship_class,
        manufacturer,
        crew
    } = starships[0];

    return (
        <section
            className = { Styles.starship }
        >
            <h1>🛸</h1>
            <div className = { Styles.description }>
                <div>
                    <span>Имя:</span>
                    <span>&nbsp;{ name }</span>
                </div>
                <div>
                    <span>Класс:</span>
                    <span>&nbsp;{ starship_class }</span>
                </div>
                <div>
                    <span>Производитель:</span>
                    <span>&nbsp;{ manufacturer }</span>
                </div>
                <div>
                    <span>Команда:</span>
                    <span>&nbsp;{ crew }</span>
                </div>
            </div>
        </section>
    );
};
