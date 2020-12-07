const { createProxyMiddleware } = require("http-proxy-middleware");
const TARGET = "https://www.dabangapp.com";
const TARGET_TEST = "https://test-dabang-main.dabangapp.com";
module.exports = app => {
    app.use(
        createProxyMiddleware("/api", {
            target: TARGET_TEST,
            changeOrigin: true,
        }),
    );
};