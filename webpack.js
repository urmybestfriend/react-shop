
var Webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    webpackConfig = Webpack(require('./webpack/webpack.config.js')),
    server = {
        port: 8080,
        host: 'localhost',

        options: {
            hot: true,

            publicPath: '/',
            stats: {
                colors: true
            },

            noInfo: true,
            proxy: [{
                path: '*',
                target: 'http://localhost:8081'
            }],
            historyApiFallback: true
        }
    },
    devServer;

devServer = new WebpackDevServer(webpackConfig, server.options);

devServer.listen(server.port, server.host, function () {
    console.log('\nstarting app\n');
});
