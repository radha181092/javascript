describe('Login to Test Angular Website', function() {

	beforeEach(function(){
		
		console.log('- test started -');
		
	});

	afterEach(function(){

		console.log('- test completed -');

	});

	it('validate that the user is navigated to homepage', function() {

		browser.driver.manage().window().maximize();
		browser.get(browser.params.login.url);
		
		console.log('--- logging into homepage ---');
		
		browser.getCurrentUrl().then(function(resultText){
		    expect(resultText).toEqual('');
		    console.log('--- url verified ---');
		});
		

	});

});