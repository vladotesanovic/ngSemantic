module.exports = {
    server: {
        port: 3000,
        files: ["./demo/**/*.{html,css,js}"],
        baseDir: "./",
        codeSync: false,
        middleware: {
            // overrides the second middleware default with new settings
            1: require('connect-history-api-fallback')({index: '/demo/index.dev.html', verbose: true})
        }
    }
};
