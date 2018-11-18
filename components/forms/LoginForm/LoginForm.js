import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'antd';
import { withFormik } from 'formik';
import InputFiled   from '../../inputs/input-field/InputField';
import PasswordField from '../../inputs/password-field/PasswordField';
import {
    required,
    email,
    validateForm
} from '../../../common/validation/index';
import { GoogleLogin } from 'react-google-login';
import { GOOGLE_KEY } from '../../../common/config/index';
import TelegramLoginButton from 'react-telegram-login';
import Link from 'next/link';
import {LoginFormStyle} from './LoginFormStyle';

const loginFormSchema = {
    email: [required, email],
    password: [required]
};

const validate = values => validateForm(values, loginFormSchema);

const LoginForm = ({
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    sendGoogleToken,
    handleTelegramResponse
}) => {
    return (
        <LoginFormStyle>
            <Form className="login-form" name="login" onSubmit={handleSubmit}>
                <h1 className={'form-title'}>Вход</h1>
                <InputFiled
                    size={'large'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="email"
                    meta={{ touched: touched.email, error: errors.email }}
                    type="text"
                    placeholder="Ваш Email"
                    label="Логин"
                    value={values.email}
                />
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
                <div className="login-button-container">
                    <div className={'simple-login'}>
                        <Button size={'large'} className={'enterButton'} htmlType="submit">
                            Войти
                        </Button>
                        <div className={'flex flex-column flex-center'}>
                            <Link href={''} ><a style={{color:'white'}}>Забыли пароль?</a></Link>
                        </div>
                    </div>
                    <div className={'social-auth flex flex-center'}>
                        <GoogleLogin
                            prompt={'consent'}
                            className={'googleButton'}
                            clientId={GOOGLE_KEY}
                            buttonText={<div className={'contain'}>
                                <div className={'googlepic'}/>
                                <p>Login with Google</p>
                            </div>}
                            onSuccess={response => sendGoogleToken(response)}
                        />
                        <TelegramLoginButton
                            cornerRadius={0}
                            className={'telegramButton'}
                            dataOnauth={handleTelegramResponse}
                            usePic={false}
                            botName={'restartzpbot'}
                            buttonSize={'large'}
                        />
                    </div>
                </div>
            </Form>
        </LoginFormStyle>
    );
};

LoginForm.propTypes = {
    handleSubmit: PropTypes.func,
    values: PropTypes.object,
    touched: PropTypes.object,
    handleBlur: PropTypes.func,
    handleChange: PropTypes.func,
    errors: PropTypes.object,
    sendGoogleToken: PropTypes.func,
    handleTelegramResponse: PropTypes.func
};

const LoginFormWithFormik = withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({ email: '', password: '' }),
    handleSubmit(
        values,
        {
            props: { onSubmit }
        }
    ) {
        onSubmit(values);
    },
    validate: values => validate(values),
    displayName: 'LoginForm' // helps with React DevTools
});

export default LoginFormWithFormik(LoginForm);