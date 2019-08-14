// Core
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

// Instruments
import { store } from './init/store';
import { history } from './init/middleware';

// Components
import { Routes } from './routes';

render(
    <Provider store = { store }>
        <Router history = { history }>
            <Routes />
        </Router>
    </Provider>,
    document.getElementById('app'),
);
