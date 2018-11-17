import React from 'react';
import { connect } from 'react-redux';
import DefaultLayout from '../components/layout/DefaultLayout';

class Index extends React.Component {
    static async getInitialProps({ req }) {
        const isServer = !!req;
        return {isServer};
    }

    render() {
        return (
            <DefaultLayout>
                <h1>Hello</h1>
            </DefaultLayout>
        );
    }
}

export default connect()(Index);
