const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(createProxyMiddleware('/apitest',
        {
            target: 'http://61.10.9.22:10004/',
            changeOrigin: true,
            pathRewrite: {
                "^/apitest": "",
            },
        }
    ));
}
