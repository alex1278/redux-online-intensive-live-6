// Core
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { customInput, customSelect } from '../fields';
import { 
    required,
    minLength,
    maxLength
 } from './validation';
 import './styles.css';

const RegistrationComponent = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field
                name="firstName"
                component={customInput}
                label="First Name"
                type="text"
                validate={[required]}
            />
            <Field
                name="surname"
                component={customInput}
                label="Surname"
                type="text"
                validate={[required]}
            />
            <Field
                name="username"
                component={customInput}
                label="Username"
                type="text"
                validate={[required, minLength, maxLength]}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export const RegistrationForm = reduxForm({
    form: 'registration',
})(RegistrationComponent);