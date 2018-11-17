import React, {Component} from 'react';
import {Layout} from 'antd';
import Link from 'next/link';
import {Button, Icon, SideSheet} from 'evergreen-ui';
import RoutesList from '../RoutesList';
import {HeaderStyle} from './HeaderStyle';

const { Header } = Layout;

class AppHeader extends Component {


    constructor(props) {
        super(props);

        this.state = {
            isShown:false
        };
    }

    mobileMenuSwitch = () => {
        this.setState({isShown:!this.state.isShown});
    };


    render() {
        const { isShown } = this.state;
        return (
            <HeaderStyle>
                <Header className={'header'}>
                    <div className={'menu-container'}>
                        <div className={'flex flex-space-around headerfix'}>
                            <Link href={'/'}>
                                <a>
                                    <div className={'logo'} />
                                </a>
                            </Link>
                            <RoutesList />
                            {
                                <div className={'flex flex-center flex-column'}>
                                    <SideSheet
                                        position={'right'}
                                        isShown={isShown}
                                        onCloseComplete={() => this.setState({isShown:false})}
                                        width={'100%'}
                                        containerProps={{
                                            marginTop:'64px',
                                            paddingBottom:'30px',
                                            paddingTop:'20px',
                                            height:'auto',
                                            width:'100%'
                                        }}
                                        hasCancel={false}
                                    >
                                        <RoutesList mobile />
                                    </SideSheet>
                                    <Button  className={'transparent-button mobile-header-button'} onClick={this.mobileMenuSwitch}>
                                        {!isShown ?
                                            <Icon icon="menu" size={40} color={'#36a89d'}/>
                                            :
                                            <Icon icon="cross" size={40} color={'#36a89d'}/>
                                        }
                                    </Button>
                                </div>
                            }
                        </div>
                    </div>
                </Header>
            </HeaderStyle>
        );
    }
}


export default AppHeader;
