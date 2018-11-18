import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';
const FormItem = Form.Item;

const { TextArea } = Input;

const TextAreaField = ({ dark, label, type, meta: { touched, error }, autosize, placeholder, prefixText, required, ...input }) => {
    let validateStatus = '';
    if (touched && error) {
        validateStatus = 'error';
    }
    const inputClass = dark ? 'input-dark' : '';
    return (
        <React.Fragment>
            <div className="input-with-prefix-container">
                <FormItem colon={false} validateStatus={validateStatus} help={touched && error}>
                    <label>
                        {label}
                        {required && <span className="field-start"> *</span>}
                    </label>
                    <div className="input-with-prefix">
                        <div className="prefix-text-item">{prefixText}</div>
                        <TextArea {...input} placeholder={placeholder} type={type} autosize={autosize} className={inputClass} />
                    </div>
                </FormItem>
            </div>
        </React.Fragment>
    );
};

TextAreaField.propTypes = {
    input: PropTypes.object,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    dark: PropTypes.bool,
    semi: PropTypes.bool,
    required: PropTypes.bool,
    placeholder: PropTypes.string,
    prefixText: PropTypes.string,
    type: PropTypes.string,
    meta: PropTypes.object
};

export default TextAreaField;
