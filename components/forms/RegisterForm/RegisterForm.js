import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'antd';
import { withFormik } from 'formik';
import InputFiled   from '../../inputs/input-field/InputField';
import PasswordField from '../../inputs/password-field/PasswordField';
import {
    required,
    minLength,
    email,
    validateForm,
    charsOnly,
    passwordConfirmation
} from '../../../common/validation/index';
import Link from 'next/link';
import {RegisterFormStyle} from './RegisterFormStyle';

const registerFormSchema = {
    first_name: [required, charsOnly],
    last_name: [required, charsOnly],
    email: [required, email, minLength(3)],
    password: [required, minLength(6)],
    c_password: [required, passwordConfirmation('password')]
};

const validate = values => validateForm(values, registerFormSchema);

const RegisterForm = ({ errors, touched, handleChange, handleBlur, handleSubmit, values }) => {
    return (
        <RegisterFormStyle>
            <Form className="register-form" name="register" onSubmit={handleSubmit}>
                <h1 className={'form-title'}>Регистрация</h1>
                <InputFiled
                    size={'large'}
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="first_name"
                    meta={{ touched: touched.first_name, error: errors.first_name }}
                    type="text"
                    placeholder="Ваше имя"
                    label="Имя"
                    value={values.first_name}
                />
                <InputFiled
                    size={'large'}
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="last_name"
                    meta={{ touched: touched.last_name, error: errors.last_name }}
                    type="text"
                    placeholder="Ваша фамилия"
                    label="Фамилия"
                    value={values.last_name}
                />
                <InputFiled
                    size={'large'}
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="email"
                    meta={{ touched: touched.email, error: errors.email }}
                    type="text"
                    placeholder="Ваш email"
                    label="Почта"
                    value={values.email}
                />
                <PasswordField
                    size={'large'}
                    required
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
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    meta={{ touched: touched.c_password, error: errors.c_password }}
                    name="c_password"
                    type="password"
                    placeholder="Повторите пароль"
                    label="Подтверждение"
                    value={values.c_password}
                />
                <div className={'buttons'}>
                    <Button size={'large'} className={'floatRight submitButton'} htmlType="submit">
                    Зарегистрироваться
                    </Button>
                    <Button size={'large'} className={'floatLeft'} htmlType="submit">
                        <Link href={'/login'}><a>Войти</a></Link>
                    </Button>
                </div>
            </Form>
        </RegisterFormStyle>
    );
};

RegisterForm.propTypes = {
    handleSubmit: PropTypes.func,
    values: PropTypes.object,
    touched: PropTypes.object,
    handleBlur: PropTypes.func,
    handleChange: PropTypes.func,
    errors: PropTypes.object
};

const RegisterFormWithFormik = withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({ email: '', password: '', first_name: '', last_name: '', c_password: '' }),
    handleSubmit(
        values,
        {
            props: { onSubmit }
        }
    ) {
        onSubmit(values);
    },
    validate: values => validate(values),
    displayName: 'RegisterForm'
});

export default RegisterFormWithFormik(RegisterForm);