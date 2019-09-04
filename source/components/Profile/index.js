// Core
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import cx from 'classnames';

// Instruments
import Styles from './styles.m.css';
import { profileActions } from '../../bus/profile/actions';

export const Profile = () => {
    const dispatch = useDispatch();

    const _submit = (values, actions) => {
        dispatch(profileActions.startFetching());
        actions.setSubmitting(false);
        dispatch(profileActions.fillProfile(values));
        dispatch(profileActions.stopFetching());
    };

    const profile = useSelector((state) => state.profile);
    const { firstName, lastName, isFetching } = profile;

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
                onSubmit = { _submit }
            />
        </section>
    );
}
