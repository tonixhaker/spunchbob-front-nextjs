import React, { Component } from 'react';
import {SocialIcon} from 'react-social-icons';
import {Layout} from 'antd';
import {FooterStyle} from './FooterStyle';

const { Footer } = Layout;

class AppFooter extends Component {

    render() {
        return(
            <FooterStyle>
                <Footer className={'footer'}>
                    <div className={'social-box'}>
                        <SocialIcon url="http://instagram.com" network="instagram" />
                        <SocialIcon url="http://facebook.com" network="facebook" />
                        <SocialIcon url="http://vk.com" network="vk" />
                        <SocialIcon url="http://twitter.com" network="twitter" />
                    </div>
                </Footer>
            </FooterStyle>
        );
    }
}

export default AppFooter;
