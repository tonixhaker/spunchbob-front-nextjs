import React from 'react';
import { connect } from 'react-redux';
import DefaultLayout from 'components/layout/DefaultLayout';
import TitleBlock from 'components/common/TitleBlock/TitleBlock';
import LatestPosts from 'components/common/Posts/LatestPosts';
import InviteBlock from 'components/common/InviteBlock/InviteBlock';
import AuthorBlock from 'components/common/AuthorBlock/Author';

class Index extends React.Component {
    static async getInitialProps({ req }) {
        const isServer = !!req;
        return {isServer};
    }

    render() {
        return (
            <DefaultLayout>
                <TitleBlock
                    img={require('img/title-background.jpg')}
                    title={'Рестарт'}
                    subtitle={'Живешь, балдеешь, жрешь и худеешь'}
                    alt={'Рестарт'}
                />
                <LatestPosts />
                <InviteBlock />
                <AuthorBlock />
            </DefaultLayout>
        );
    }
}

export default connect()(Index);
