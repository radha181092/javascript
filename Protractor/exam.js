
describe('DJAlexander Demo app' , function(){
   

    it('should add one and two', function() {
        browser.waitForAngularEnabled(false);
        browser.get('http://sprint.eu-west-1.elasticbeanstalk.com/home');
        browser.driver.ignoreSynchronization = true;
        
        titleGot = browser.getTitle().then(function(promisedResult){
            console.log("********************");
            console.log("Home Page Title is : " + promisedResult);
            return promisedResult;
       })

        //browser.driver.findElement(by.className('loginbtn')).click();
        element(by.xpath('//*[@id="bs-example-navbar-collapse-1"]/div/a[1]')).click();
        browser.waitForAngularEnabled(false);
       
        titleGot = browser.getTitle().then(function(promisedResult){
            console.log("**********************");
            console.log("Login Page Title is : " + promisedResult);
            return promisedResult;

            

// click on registration link
            element(by.xpath('//*[@id="loginForm"]/div/span[2]/a[1]')).click();
           // element(by.model('yourName')).sendKeys('Julie');
      
        })


    });
    
       
});