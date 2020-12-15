const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use (
        proxy("/api", {
            target: "http://54.90.75.139:8080",
            secure: false,
            changeOrigin: true,
        })
    )



}