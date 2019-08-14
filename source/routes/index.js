// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route, Redirect } from 'react-router-dom';

// Components
import { Nav, Bridge } from '../components';
import { book } from './book';

@hot(module)
export class Routes extends Component {
    render() {
        return (
            <>
                <Route
                    component = { Nav }
                    path = '/'
                />
                <Switch>
                    <Route
                        exact
                        component = { Bridge }
                        path = { book.root }
                    />
                    <Redirect to = { book.root } />
                </Switch>
            </>
        );
    }
}
