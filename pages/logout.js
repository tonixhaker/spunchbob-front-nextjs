import React, {Component} from 'react';
import {logout} from 'store/auth/actions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {tokenRemove} from '../common/helpers/storage';
import Loader from 'components/common/Loader/Loader';
import DefaultLayout from 'components/layout/DefaultLayout';
import Router from 'next/router';


class Logout extends Component {

    static propTypes = {
        logout:PropTypes.func,
        isAuthenticated:PropTypes.bool
    };

    componentWillReceiveProps(props){
        if(!props.isAuthenticated){
            Router.push('/');
        }
    }

    componentDidMount(){
        this.props.logout().then(()=>{
            tokenRemove();
        });
        if(!this.props.isAuthenticated){
            Router.push('/');
        }
    }

    render() {
        return (
            <DefaultLayout>
                <Loader height={'calc(100vh - 147px)'} size={100} />
            </DefaultLayout>
        );
    }
}

const mapStateToProps = store => ({
    isAuthenticated: store.auth.isAuthenticated
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
