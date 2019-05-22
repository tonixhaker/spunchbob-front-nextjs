import React, {Component} from 'react';
import  LoginForm from 'components/forms/LoginForm/LoginForm';
import {Parallax} from 'react-parallax';
import {google_auth, login, telegram_auth} from 'store/auth/actions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import loginBack from 'img/login-back.jpg';
import DefaultLayout from 'components/layout/DefaultLayout';
import styled from 'styled-components';
import Router from 'next/router';

const LoginStyle = styled.div`
.login-block{
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  .paralaxcontent{
    min-height: calc(100vh - 147px);
  }
  .container{
    width: 40%;
    margin-top: 50px;
    margin-bottom: 50px;
    .ant-form-explain {
    position: absolute;
    width: 100%;
    text-align: right;
    color: #f5222d;
    font-weight: 600;
   }
  .ant-row{
     margin-bottom: 0;
   }
  .ant-form label {
    font-size: 15px;
    font-weight: 600;
    text-shadow: #a5a2a2 0px 1px 1px;
  }
  }
}
@media only screen and (max-width: 1300px) {
  .login-block .container{
    width: 50%;
  }
}

@media only screen and (max-width: 1000px) {
  .login-block .container{
    width: 60%;
  }
}

@media only screen and (max-width: 700px) {
  .login-block .container{
    width: 80%;
  }
}

@media only screen and (max-width: 500px) {
  .login-block .container{
    width: 95%;
  }
}
`;

class Login extends Component {

    static propTypes = {
        login:PropTypes.func,
        google_auth: PropTypes.func,
        telegram_auth: PropTypes.func,
        isAuthenticated:PropTypes.bool
    };

    onSubmit = (data) => {
        this.props.login({user:data});
    };

    sendGoogleToken = values => {
        console.log(values);
        this.props.google_auth({ token: values.tokenId });
    };

    handleTelegramResponse = response => {
        this.props.telegram_auth(response);
    };

    componentWillReceiveProps(props){
        if(props.isAuthenticated){
            Router.push('/');
        }
    }


    render() {
        return(
            <DefaultLayout>
                <LoginStyle>
                    <div className={'login-block'}>
                        <Parallax
                            blur={5}
                            bgImage={loginBack}
                            bgImageAlt="kivi"
                            strength={200}
                        >
                            <div className={'flex flex-center paralaxcontent'}>
                                <div className={'container'}>
                                    <LoginForm
                                        onSubmit={this.onSubmit}
                                        handleTelegramResponse={this.handleTelegramResponse}
                                        sendGoogleToken={this.sendGoogleToken}
                                    />
                                </div>
                            </div>
                        </Parallax>
                    </div>
                </LoginStyle>
            </DefaultLayout>
        );
    }
}

const mapStateToProps = store => ({
    isAuthenticated:store.auth.isAuthenticated
});

const mapDispatchToProps = (dispatch) => ({
    login: (data) => dispatch(login(data)),
    google_auth: (token) => dispatch(google_auth(token)),
    telegram_auth: (response) => dispatch(telegram_auth(response))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
