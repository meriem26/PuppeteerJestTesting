module.exports = {
    preset: "jest-puppeteer",
    globals: {
        BBC : "https://www.bbc.co.uk/"
    },
    testMatch: [
        "**/test/**/*.test.js"
    ],
    verbose: true
}