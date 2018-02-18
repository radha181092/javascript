
describe("Test Automation of a banking app",function(){

	var ObjRep = require('../objectRepository/demo_drop_down_OR.json');
	//var testDat = require('../testData/');

	it("validate customer login test",function(){

		browser.get(browser.params.login.url);
		element(by.buttonText(ObjRep.demo_drop_downs.loginBtn)).click();


		var tilte = expect(browser.getTitle()).toContain("Protractor practice");
		console.log("Title of page is :"+tilte);

		element.all(by.css("#userSelect option")).then(function(items){


			//printing values from dropdown list

			console.log("-----printing values from dropdown list-----");
			console.log("Total values in dropdown are : "+items.length);

			for(i=0; i<items.length; i++){

				items[i].getText().then(function(text){



					console.log(text);

				});

			}

			console.log("-----printing value attributes from dropdown list-----");

			for(i=0; i<items.length; i++){

				items[i].getAttribute("value").then(function(text){

					console.log(text);

				});

			}

			element(by.model("custId")).$("[value='2']").click();

			browser.sleep(3000);

			element(by.buttonText("Login")).click();

			expect(element(by.binding("user")).getText()).toContain("Harry");

			browser.sleep(3000);


		});


	});


});