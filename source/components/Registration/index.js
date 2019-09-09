// Core
import React from 'react';

// Components
import { RegistrationForm } from '../RegistrationForm';

export const Registration = () => {
    const handleSubmit = (values) => {
        window.alert(JSON.stringify(values, null, 4));
    }

    const getInitialValues = () => {
        return {
            preference: 'spaces',
            newsletter: true
        }
    }

    return (
        <RegistrationForm
            onSubmit={ handleSubmit }
            initialValues={getInitialValues()}
        />
    );
}