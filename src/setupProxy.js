const { createProxyMiddleware } = require("http-proxy-middleware");
const TARGET = "https://test-dabang-main.dabangapp.com";
module.exports = app => {
    app.use(
        createProxyMiddleware("/api", {
            target: TARGET,
            changeOrigin: true,
        }),
    );
};