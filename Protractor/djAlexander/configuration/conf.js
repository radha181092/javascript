//*****  configuration file  *****  

exports.config = {

    //params to use in scripts
    params: {
        login: {
            //url: 'http://www.way2automation.com/protractor-angularjs-practice-website.html',
            //url: 'https://www.freelancer.com',
            url: 'http://www.way2automation.com/angularjs-protractor/banking/#/login',
            url1 : 'https://www.freelancer.com/',
        }
    },

    directConnect: true,  //when not using webdriver manager


    capabilities: {
        'browserName': 'chrome', //can use 'firefox' or 'chrome'
        //'browserName': 'firefox',

/* 				chromeOptions: {
                args: [ "--headless" ]
            }, */

            
    },

    //multiCapabilities // parallel runs across multi-browsers

    // Framework to use is Jasmine.
    framework: 'jasmine',

    specs: ['../Tests_Script/assignment8.js'],

    jasmineNodeOpts: {
        //defaultTimeoutInterval: 30000 
    },

    onPrepare: function() {

        // Override the timeout for webdriver.
        //browser.manage().timeouts().setScriptTimeout(60000);

    },

    onComplete: function () {
        //send_mail();
    },

};