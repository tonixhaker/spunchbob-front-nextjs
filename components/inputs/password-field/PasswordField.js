import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';
import { IconStyle } from './password-field-styles';

import './styles.css';

const FormItem = Form.Item;

class PasswordIcon extends React.PureComponent {
    constructor(props) {
        super(props);
        this.passwordIcon = React.createRef();
    }

    componentDidMount() {
        this.passwordIcon.addEventListener('mouseup', this.props.onMouseDown);
        this.passwordIcon.addEventListener('mousedown', this.props.onMouseUp);
    }

    componentWillUnmount() {
        this.passwordIcon.removeEventListener('onMouseDown', this.props.onMouseDown);
        this.passwordIcon.removeEventListener('onMouseUp', this.props.onMouseUp);
    }

    render() {
        return (
            <IconStyle>
                <div className="password-field-container" ref={pi => (this.passwordIcon = pi)}>
                    <div className="password-field-separator" />
                    {/* <Icon name="eye-gray" /> */}
                </div>
            </IconStyle>
        );
    }
}

PasswordIcon.propTypes = {
    onMouseDown: PropTypes.func,
    onMouseUp: PropTypes.func
};

class PasswordField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPress: false
        };
    }

    render() {
        const {
            label,
            required,
            meta: { touched, error },
            placeholder,
            dark
        } = this.props;

        let validateStatus = '';
        if (touched && error) {
            validateStatus = 'error';
        }
        const inputClass = dark ? 'input-dark' : '';
        return (
            <FormItem colon={false} validateStatus={validateStatus} help={touched && error}>
                <label>
                    {label}
                    {required && <span className="field-start"> *</span>}
                </label>
                <div>
                    <Input
                        {...this.props}
                        placeholder={placeholder}
                        type={this.state.isPress ? 'text' : 'password'}
                        className={inputClass}
                        suffix={
                            <PasswordIcon
                                onMouseDown={() => this.setState({ isPress: false })}
                                onMouseUp={() => this.setState({ isPress: true })}
                            />
                        }
                    />
                </div>
            </FormItem>
        );
    }
}
PasswordField.propTypes = {
    input: PropTypes.object,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    placeholder: PropTypes.string,
    dark: PropTypes.bool,
    required: PropTypes.bool,
    meta: PropTypes.object
};

export default PasswordField;
