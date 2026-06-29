const log = require('./test/utils/logger');

exports.config = {
    runner: 'local',
    specs: ['./test/features/**/*.feature'],
    maxInstances: 4,
    capabilities: [
        {
            maxInstances: 2,
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: ['--headless=new', '--disable-gpu', '--window-size=1280,800'],
            },
        },
        {
            maxInstances: 2,
            browserName: 'firefox',
            'moz:firefoxOptions': {
                args: ['-headless', '--width=1280', '--height=800'],
            },
        },
    ],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://www.saucedemo.com',
    waitforTimeout: 15000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'cucumber',
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: false,
        }],
    ],
    cucumberOpts: {
        require: ['./test/features/step-definitions/**/*.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 90000,
        ignoreUndefinedDefinitions: false,
    },
    beforeScenario: function (world) {
        log.info(`Scenario started: ${world.pickle.name}`);
    },
    afterScenario: function (world, result) {
        const status = result.passed ? 'PASSED' : 'FAILED';
        log.info(`Scenario finished: ${world.pickle.name} -> ${status}`);
    },
    afterStep: async function (step, scenario, { error }) {
        if (error) {
            await browser.takeScreenshot();
        }
    },
};