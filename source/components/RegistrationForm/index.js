// Core
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { customInput, customSelect } from '../fields';
import { 
    required,
    minLength,
    maxLength,
    matchesPassword,
    asyncValidate
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
            <Field
                name="password"
                component={customInput}
                label="Password"
                type="password"
                validate={[required]}
            />
            <Field
                name="confirmPassword"
                component={customInput}
                label="Confirm Password"
                type="password"
                validate={[required, matchesPassword]}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export const RegistrationForm = reduxForm({
    form: 'registration',
    asyncValidate,
    asyncBlurFields: ['username']
})(RegistrationComponent);