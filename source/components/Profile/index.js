// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import cx from 'classnames';

// Instruments
import Styles from './styles.m.css';
import { profileActions } from '../../bus/profile/actions';

@connect(
    (state) => ({ profile: state.profile }),
    profileActions,
)
export class Profile extends Component {
    _submit = (values, actions) => {
        this.props.startFetching();
        actions.setSubmitting(false);
        this.props.fillProfile(values);
        this.props.stopFetching();
    };

    render() {
        const {
            profile: { firstName, lastName, isFetching },
        } = this.props;

        const buttonMessage = isFetching ? '⌛️ Обновляю' : '✅ Обновлено';

        const disabledStyle = cx({
            [ Styles.disabled ]: isFetching,
        });

        return (
            <section className = { Styles.profile }>
                <h1>
                    👩🏼‍🚀 {firstName} {lastName}
                </h1>
                <Formik
                    initialValues = {{ firstName, lastName }}
                    render = { () => (
                        <Form>
                            <Field
                                className = { disabledStyle }
                                disabled = { isFetching }
                                name = 'firstName'
                                type = 'text'
                            />
                            <Field
                                className = { disabledStyle }
                                disabled = { isFetching }
                                name = 'lastName'
                                type = 'text'
                            />
                            <button
                                className = { disabledStyle }
                                disabled = { isFetching }
                                type = 'submit'>
                                {buttonMessage}
                            </button>
                        </Form>
                    ) }
                    onSubmit = { this._submit }
                />
            </section>
        );
    }
}
