//*****  configuration file  *****  

exports.config = {

		//params to use in scripts
		params: {
			login: {
				url: 'https://www.freelancer.com/',
			}
        },  

		directConnect: true,  //when not using webdriver manager


		capabilities: {
			'browserName': 'chrome' //can use 'firefox' or 'chrome'

				/*				chromeOptions: {
					args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
				},*/

        },
        
        

		//multiCapabilities // parallel runs across multi-browsers

		// Framework to use is Jasmine.
        framework: 'jasmine',
        
		specs: ['frelancer.js'],

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