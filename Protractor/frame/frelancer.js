describe('Freelancer home page', function() {

	it('validate that the user is navigated to homepage', function() {
        
		browser.driver.manage().window().maximize();
		browser.get(browser.params.login.url);
		//var buttonwntTowrk = element(by.buttonText("I want to Work"));
		var buttonwntTowrk = element(by.xpath("//a[@href='/signup']/span[@class='HomeHero-btnText']"));
		//var buttonwntTowrk = element(by.xpath("//a[@id='hero-work-link']/span[@class='HomeHero-btnText--sub']"));
		//var buttonwntTowrk = element(by.xpath("//*[contains(@class, 'HomeHero-btnText--sub') and contains(text(), 'I want to Work')"));
		//var buttonwntTowrk = element(by.css('HomeHero-btnText--sub'));

		buttonwntTowrk.click();
		browser.sleep(3000);
		expect(browser.getTitle()).toContain('Freelancer');
		//console.log("Title of Page :",  browser.getTitle);
		console.log('--- Freelancer Home page ---');

		var currenturl = expect(browser.getCurrentUrl());//.toEqual('whateverbrowseryouarexpectingtobein');
		console.log(currenturl);
	});
		
		
		xit('Enter user name and password', function() {

			var credential = {username : '', pass: ''}
			var loginbutton = element(by.xpath("//*[contains(text(), 'Log In')]"));
			//var Email = element(by.xpath("//*[contains(@name, 'Email Address')"));
			var username = element(by.xpath("//*[contains(@name, 'Username')"));
			var pass = element(by.xpath("//*[contains(@name, 'Password')"));
			var submit = element(by.xpath("//*[contains(@class, 'btn btn-info btn-large btn-submit')"));

			loginbutton.click();

		//Email.sendkeys("abc@gmail.com");
		username.sendkeys("xyz");
		pass.sendkeys("xyz");
		submit.click();
		browser.close();
		
		
		});
		

	

});

