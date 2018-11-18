import React, {Component} from 'react';
import RegisterForm from 'components/forms/RegisterForm/RegisterForm';
import {Parallax} from 'react-parallax';
import {register} from 'store/auth/actions';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import registerBack from 'img/register-back.jpg';
import DefaultLayout from 'components/layout/DefaultLayout';
import styled from 'styled-components';

const RegisterStyle = styled.div`
.registration-block{
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  .paralaxcontent{
    min-height: calc(100vh - 70px);
  }
  .container{
    width: 40%;
    margin-top: 50px;
    margin-bottom: 50px;
    }
}


@media only screen and (max-width: 1300px) {
  .registration-block .container{
    width: 50%;
  }
}

@media only screen and (max-width: 1000px) {
  .registration-block .container{
    width: 60%;
  }
}

@media only screen and (max-width: 700px) {
  .registration-block .container{
    width: 80%;
  }
}

@media only screen and (max-width: 500px) {
  .registration-block .container{
    width: 95%;
  }
}
`;

class Registration extends Component {

    static propTypes = {
        register:PropTypes.func,
    };

    onSubmit = (data) => {
        this.props.register(data);
    };

    render() {
        return(
            <DefaultLayout>
                <RegisterStyle>
                    <div className={'registration-block'}>
                        <Parallax
                            blur={5}
                            bgImage={registerBack}
                            bgImageAlt="kivi"
                            strength={200}
                        >
                            <div className={'flex flex-center paralaxcontent'}>
                                <div className={'container'}>
                                    <RegisterForm
                                        onSubmit={this.onSubmit}
                                    />
                                </div>
                            </div>
                        </Parallax>
                    </div>
                </RegisterStyle>
            </DefaultLayout>
        );
    }
}
const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
    register: (data) => dispatch(register(data)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Registration);
