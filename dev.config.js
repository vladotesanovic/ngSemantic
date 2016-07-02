module.exports = {
    server: {
        port: 3000,
        files: ["./src/**/*.{html,htm,css,js}"],
        server: { "baseDir": "./" },
        codeSync: false,
        middleware: {
            // overrides the second middleware default with new settings
            1: require('connect-history-api-fallback')({index: '/index.dev.html', verbose: true})
        }
    }
};