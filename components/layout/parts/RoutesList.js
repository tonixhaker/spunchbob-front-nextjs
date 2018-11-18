import React, {Component} from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';


class RoutesList extends Component {

    static propTypes = {
        mobile:PropTypes.bool,
        isAuthenticated:PropTypes.bool
    };

    constructor(props) {
        super(props);

        this.guestNavigation = [
            {
                title:'Главная',
                link:'/'
            },
            {
                title:'О нас',
                link:'/about'
            },
            {
                title: 'Блог',
                link: '/blog'
            },
            {
                title: 'Войти',
                link: '/login'
            },
            {
                title: 'Зарегистрироваться',
                link: '/register'
            }
        ];

        this.authNavigation = [
            {
                title:'Главная',
                link:'/'
            },
            {
                title:'О нас',
                link:'/about'
            },
            {
                title: 'Блог',
                link: '/blog'
            },
            {
                title: 'Мой профиль',
                link: '/profile'
            },
            {
                title: 'Выйти',
                link: '/logout'
            }
        ];

        this.state = {
            isShown:false
        };
    }


    render() {
        const navigation = this.props.isAuthenticated?this.authNavigation:this.guestNavigation;
        const {mobile} = this.props;
        return (

            <nav className={'nav-menu flex flex-center flex-column'}>
                <ul className={'flex flex-space-around'+(mobile&&' mobile-header-nav')}>
                    {navigation.map((nav, i)=>{
                        return(
                            <li className={'flex flex-center flex-column'} key={i}>
                                <Link href={nav.link}>
                                    <a>{nav.title}</a>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

        );
    }
}

const mapStateToProps = (store) => ({
    isAuthenticated:store.auth.isAuthenticated
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(RoutesList);
