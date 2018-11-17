const withSass = require('@zeit/next-sass');
const path = require('path');


module.exports = withSass({
    cssModules: true,
    webpack: config => {
        config.module.rules.push({
            test: /\.(woff|jpg|png|gif|jpeg)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 10000000,
                },
            },
        });

        config.resolve = {
            alias: {
                img:        path.resolve(__dirname, 'static/img/'),
                components: path.resolve(__dirname, 'components/'),
                helpers:    path.resolve(__dirname, 'common/helpers'),
                store:      path.resolve(__dirname, 'store')
            }
        };

        return config;
    }
});
