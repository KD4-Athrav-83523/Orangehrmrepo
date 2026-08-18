const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({

    testDir: './tests',

    use: {
        headless: false,

        // Google Chrome
        channel: 'chrome',

        screenshot: 'on',
        video: 'retain-on-failure'
    },

});