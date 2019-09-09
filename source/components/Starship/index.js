// Core
import React from 'react';
import { useSelector } from 'react-redux';
import { createMatchSelector } from 'connected-react-router';
import { book } from '../../routes/book';

// Instruments
import Styles from './styles.m.css';

export const Starship = () => {
    const starships = useSelector((state) => state.feed.starships);
    const matchSelector = createMatchSelector({ path: book.starship });
    const state = useSelector((state) => state);
    const match = matchSelector(state);

    if(!match) {
        return false;
    }

    const starshipName = match.params.starship;

    if(!starships.length) {
        return false;
    }

    const starship = starships.find((starship) => {
        return starship.name.replace(/ /g, '-').toLowerCase() === starshipName;
    });

    if(!starship) {
        return false;
    }

    const {
        name,
        starship_class,
        manufacturer,
        crew
    } = starship;

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
