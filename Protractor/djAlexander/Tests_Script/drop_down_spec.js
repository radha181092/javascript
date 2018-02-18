

	
describe("Automation for banking app", function(){
    // all var and file should be imported here 
    
    var ObjRep = require('../objectRepository/demo_drop_down.json');
    
    
        it("validate customer login test", function(){
    
            //script should be here
    
            browser.get(browser.params.login.url);
            element(by.buttonText(ObjRep.demo_drop_downs.loginBtn)).click();
    
            var Title = expect(browser.getTitle()).toContain("Protractor practice website - Banking App");
            console.log("***********************************************")
            console.log("Title of page is :" +Title);
    
            element.all(by.css("#userSelect option")).then(function(items){  
                console.log("Drop down list contain "+items.length);

          for(i = 0; i<items.length; i++){
              items[i].getText().then(function(text){
                  console.log(text);

              });
          }
          element(by.model("custId")).$("[value='5']").click();

          browser.sleep(3000);

          element(by.buttonText("Login")).click();

          expect(element(by.binding("user")).getText()).toContain("Neville Longbottom");

           
            browser.sleep(3000);
          });
	


	});


});