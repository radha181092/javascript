/**
 * created by radha
 */

describe("Locator testing By Binding",function(){
     // all variables and locators in global.json file
    var ObjRep = require('../objectRepository/global.json');



    it("Validating a Calculator",function(){

        browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
        element(by.model("first")).sendKeys(ObjRep.LocatorsVar.firstInput);
        element(by.model("second")).sendKeys(ObjRep.LocatorsVar.SecondInput);

        element(by.id("gobutton")).click();


        element(by.binding("latest")).getText().then(function(text){


            console.log(text);
           
        })
    }) ;


});
