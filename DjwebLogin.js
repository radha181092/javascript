describe('Login to DJ Angular Website', function() {

	beforeEach(function(){
		
		console.log('- test started -');
		
	});

	afterEach(function(){

		console.log('- test completed -');

	});

	it('validate that the user is navigated to homepage', function() {

		//browser.driver.manage().window().maximize();
	    browser.waitForAngularEnabled(false);
		browser.get("http://sprint.eu-west-1.elasticbeanstalk.com/home");
		//browser.ignoreSynchronization = true;
		console.log('--- logging in ---');
		
 		browser.getCurrentUrl().then(function(resultText){
                expect(resultText).toEqual('http://sprint.eu-west-1.elasticbeanstalk.com/home');
                console.log(resultText);
		    console.log('--- url verified ---');
		});
         
       
            element(by.xpath("//div[@id='bs-example-navbar-collapse-1']//a[@href='/client-area/login']")).click();
            
            browser.getTitle().then(function (title) {
            expect(title).toEqual('DJ Alexander');
          })
          browser.sleep(3000);

        //   element(by.buttonText("Log In with Email")).click();
        //   element(by.id('username')).sendKeys('Jane');
        //   element(by.id('password')).sendKeys('1234');
        //   element(by.id('clickme')).click();
          
        //   browser.waitForAngularEnabled(true);
        //   browser.get('/page-containing-angular.html');
        });

	});

