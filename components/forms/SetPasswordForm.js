import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'antd';
import { withFormik } from 'formik';
import PasswordField from '../inputs/password-field/PasswordField';
import {
    minLength, passwordConfirmation,
    required,
    validateForm
} from '../../common/validation';

const setPasswordFormSchema = {
    password: [required, minLength(6)],
    password_confirmation: [required, passwordConfirmation('password')]
};

const validate = values => validateForm(values, setPasswordFormSchema);

const SetPasswordForm = ({
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    values
}) => {
    return (
        <Form className="login-form" name="setPassword" onSubmit={handleSubmit}>
            <h1 className={'form-title'}>Введите пароль</h1>
            <PasswordField
                size={'large'}
                onChange={handleChange}
                onBlur={handleBlur}
                meta={{ touched: touched.password, error: errors.password }}
                name="password"
                type="password"
                placeholder="Ваш пароль"
                label="Пароль"
                value={values.password}
            />
            <PasswordField
                size={'large'}
                onChange={handleChange}
                onBlur={handleBlur}
                meta={{ touched: touched.password_confirmation, error: errors.password_confirmation }}
                name="password_confirmation"
                type="password_confirmation"
                placeholder="Повторите пароль"
                label="Пароль"
                value={values.password_confirmation}
            />
            <Button size={'large'} className={'margintop20'} htmlType="submit">
                Задать пароль
            </Button>
        </Form>
    );
};

SetPasswordForm.propTypes = {
    handleSubmit: PropTypes.func,
    values: PropTypes.object,
    touched: PropTypes.object,
    handleBlur: PropTypes.func,
    handleChange: PropTypes.func,
    errors: PropTypes.object,
};

const SetPasswordFormWithFormik = withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({ password_confirmation: '', password: '' }),
    handleSubmit(
        values,
        {
            props: { onSubmit }
        }
    ) {
        onSubmit(values);
    },
    validate: values => validate(values),
    displayName: 'SetPassword'
});

export default SetPasswordFormWithFormik(SetPasswordForm);