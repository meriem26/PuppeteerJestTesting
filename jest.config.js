module.exports = {
    preset: "jest-puppeteer",
    globals: {
        URL: "https://www.bbc.co.uk/"
    },
    testMatch: [
        "**/test/**/*.test.js"
    ],
    verbose: true
}