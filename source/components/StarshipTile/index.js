// Core
import React, { Component } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

// Instruments
import Styles from './styles.m.css';
import { book } from '../../routes/book';

export const StarshipTile = (props) => {
    const dispatch = useDispatch();

    const {
        name,
        starship_class,
        manufacturer,
        crew
    } = props;

    const _navigateToStarship = () => {
        const url = `${book.panel}/${name.replace(/ /g,'-').toLowerCase()}`;
        dispatch(push(url));
    }

    return (
        <section
            className={Styles.starshipTile}
            onClick={ _navigateToStarship }
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
