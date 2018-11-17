// Validations

// Non empty validation
export const required = value => (value ? undefined : 'Обязательное поле');

// Match a particular field
export const match = comparableField => (value, values) =>
    value !== values[comparableField] ? `Не совпадает с полем '${comparableField}'` : undefined;

export const passwordConfirmation = comparableField => (value, values) =>
    value !== values[comparableField] ? 'Пароли не совпадают' : undefined;

// Max length validation
export const maxLength = max => value =>
    value && value.length > max ? `Значение должно содержать максимум ${max} символов` : undefined; // Usage: const maxLength15 = maxLength(15)

// Min length validation
export const minLength = min => value =>
    value && value.length < min ? `Значение должно содержать ${min} символов или более` : undefined; // Usage: export const minLength2 = minLength(2)

// Number validation
export const number = value => (value && isNaN(Number(value)) ? 'Значение должно быть числом' : undefined);

// Minimum value validation
export const minValue = min => value => (value && value < min ? `Длина должна быть не менее ${min}` : undefined); // Usage: export const minValue18 = minValue(18);

// Email validation
export const email = value =>
    value &&
  !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
      value
  )
        ? 'Не существующий email адрес'
        : undefined;

// Alpha numeric validation
export const alphaNumeric = value =>
    value && /[^a-zA-Z0-9 ]/i.test(value) ? 'Значение должно содержать только символы латинского алфавита' : undefined;

const invalidLink = 'Битая ссылка';

// Alpha numeric validation
export const githubLink = value => (value && !value.includes('github.com') ? invalidLink : undefined);
export const linkedInLink = value => (value && !value.includes('linkedin.com/in') ? invalidLink : undefined);
export const stackOverflowLink = value =>
    value && !value.includes('stackoverflow.com/users') ? invalidLink : undefined;

// Phone number validation
export const phoneNumber = value =>
    value && !/^(0|[1-9][0-9]{9})$/i.test(value) ? 'Номер телефона должен состоять из 10 чисел' : undefined;

export const digitsAndCharsOnly = value =>
    value && !/^[a-zA-Z0-9- ]/i.test(value)
        ? 'Значение должно состоять только из цифр, латинских букв, тире, подчеркиваний и пробелов.'
        : undefined;

export const charsOnly = value =>
    value && !/^([a-zа-яё -]+)$/i.test(value)
        ? 'Значение должно состоять только из букв, тире, подчеркиваний и пробелов.'
        : undefined;

export const projectKeyValidator = value =>
    value && !/^[a-zA-Z]*$/i.test(value) ? 'Значение должно состоять только из латинских букв' : undefined;

export const oneLetterOneDigit = value =>
    value && !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]*$/i.test(value)
        ? 'Значение должно содержать хотя бы одну латинскую букву и цифру'
        : undefined;

export const charsAndDigitsOnly = value =>
    value && !/^[a-zA-Z0-9]*$/i.test(value) ? 'Значение должно состоять только из латинских букв и цифр' : undefined;

export const digitsOnly = value =>
    value && !/^[0-9]*$/i.test(value) ? 'Значение должно состоять только из цифр' : undefined;

export const maxGrouth = max => value =>
    value>max ? 'Да вы просто гигант! Пожалуйста позвоните нам' : undefined;

export const minGrouth = min => value =>
    value<min ? 'Введите корректный рост' : undefined;

export const weightDiapasone = (min,max) => value =>
    value>max || value<min ? 'Введите корректный вес' : undefined;

// probably temp validators
export const usernameValidator = value =>
    value && (!/^[a-zA-Z0-9-_.]{2,255}$/i.test(value) || value.startsWith('-') || value.endsWith('.'))
        ? 'Не верное имя пользователя!'
        : undefined;

export const validateForm = (formValues, formSchema) => {
    let errors = {};
    const validateFormInner = (values, schema, collector) => {
        Object.keys(schema)
            .filter(v => schema.hasOwnProperty(v))
            .forEach(v => {
                const s = schema[v];
                if (Array.isArray(s)) {
                    s.forEach(validator => {
                        const result = validator(values[v], values);
                        if (result) {
                            collector[v] = result;
                        }
                    });
                } else {
                    validateFormInner(values[v], schema[v], collector);
                }
            });

        return collector;
    };

    return validateFormInner(formValues, formSchema, errors);
};
