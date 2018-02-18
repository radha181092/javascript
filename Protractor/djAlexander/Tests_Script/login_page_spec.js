describe('Login to Test Angular Website', function() {

	beforeEach(function(){
		
		console.log('- test started -');
		
	});

	afterEach(function(){

		console.log('- test completed -');

	});

	it('validate that the user is navigated to homepage', function() {

		//browser.driver.manage().window().maximize();
	
		browser.get(browser.params.login.url);
		//browser.ignoreSynchronization = true;
		console.log('--- logging in ---');
		
 		browser.getCurrentUrl().then(function(resultText){
				expect(resultText).toEqual('https://www.freelancer.com/');
		    console.log('--- url verified ---');
		});
		 

	});

});