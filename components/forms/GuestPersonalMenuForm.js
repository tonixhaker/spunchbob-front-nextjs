import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'antd';
import { withFormik } from 'formik';
import InputFiled from '../inputs/input-field/InputField';
import TextArea from '../inputs/text-area/TextAreaField';

import {
    required,
    minLength,
    email,
    validateForm,
    charsOnly,
    digitsOnly,
    maxGrouth,
    minGrouth,
    weightDiapasone
} from '../../common/validation';

const registerFormSchema = {
    first_name: [required, charsOnly],
    email: [required, email, minLength(3)],
    growth: [required, digitsOnly,maxGrouth(300),minGrouth(50)],
    weight: [required,digitsOnly,weightDiapasone(20,300)],
    phone: [required,digitsOnly]

};

const validate = values => validateForm(values, registerFormSchema);

const GuestPersonalMenuForm = ({ errors, touched, handleChange, handleBlur, handleSubmit, values }) => {
    return (
        <Form className="register-form" name="register" onSubmit={handleSubmit}>
            <h1 className={'form-title'}>Персональное меню</h1>
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
                name="growth"
                meta={{ touched: touched.growth, error: errors.growth }}
                type="text"
                placeholder="(см)"
                label="Рост"
                value={values.growth}
            />
            <InputFiled
                size={'large'}
                required
                onChange={handleChange}
                onBlur={handleBlur}
                name="weight"
                meta={{ touched: touched.weight, error: errors.weight }}
                type="text"
                placeholder="(кг)"
                label="Вес"
                value={values.weight}
            />
            <TextArea
                size={'large'}
                onChange={handleChange}
                onBlur={handleBlur}
                name="allergy"
                autosize={{ minRows: 4, maxRows: 8 }}
                meta={{ touched: touched.allergy, error: errors.allergy }}
                type="text"
                placeholder="Есть ли у вас аллергии на что-то, принимаете ли вы какие либо преператы?"
                label="Особенности"
                value={values.allergy}
            />
            <TextArea
                size={'large'}
                onChange={handleChange}
                onBlur={handleBlur}
                name="goals"
                autosize={{ minRows: 4, maxRows: 8 }}
                meta={{ touched: touched.goals, error: errors.goals }}
                type="text"
                placeholder="Чего хотите добиться, что сподвигло вас питаться правильно?"
                label="Цель"
                value={values.goals}
            />
            <InputFiled
                size={'large'}
                onChange={handleChange}
                onBlur={handleBlur}
                name="email"
                meta={{ touched: touched.email, error: errors.email }}
                type="text"
                placeholder="Ваш email"
                label="Почта"
                value={values.email}
            />
            <InputFiled
                size={'large'}
                required
                onChange={handleChange}
                onBlur={handleBlur}
                name="phone"
                meta={{ touched: touched.phone, error: errors.phone }}
                type="text"
                placeholder="Ваш контактный номер"
                label="Телефон"
                value={values.phone}
            />
            <div className={'buttons'}>
                <Button size={'large'} className={'floatLeft'} htmlType="submit">
                    Составить
                </Button>
            </div>
        </Form>
    );
};

GuestPersonalMenuForm.propTypes = {
    handleSubmit: PropTypes.func,
    values: PropTypes.object,
    touched: PropTypes.object,
    handleBlur: PropTypes.func,
    handleChange: PropTypes.func,
    errors: PropTypes.object
};

const GuestPersonalMenuFormWithFormik = withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({ email: '', weight: '', first_name: '', growth: '', phone:'' }),
    handleSubmit(
        values,
        {
            props: { onSubmit }
        }
    ) {
        onSubmit(values);
    },
    validate: values => validate(values),
    displayName: 'GuestPersonalMenuForm'
});

export default GuestPersonalMenuFormWithFormik(GuestPersonalMenuForm);