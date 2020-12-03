const { createProxyMiddleware } = require("http-proxy-middleware");
const TARGET = "https://test-dabang-main.dabangapp.com";
const TARGET_TEST = "https://api-main.dabangapp.com";
module.exports = app => {
    app.use(
        createProxyMiddleware("/api", {
            target: TARGET_TEST,
            changeOrigin: true,
        }),
    );
};