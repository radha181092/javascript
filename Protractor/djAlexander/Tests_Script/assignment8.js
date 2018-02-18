describe("Outer Describe : ",function(){
    var homePageObj = require("../objectRepository/demo_drop_down.json");
    beforeAll(() => {
        console.log("I am inside beforeAll");
    });

    beforeEach(() => {
        console.log("I am inside beforeEach");
    });

    afterAll(() => {
        console.log("I am inside afterAll");
    });

    afterEach(() => {
        console.log("I am inside afterEach");
    });

    it("Validate Page Title",function(){
        browser.get(browser.params.login.url1);
        //element(by.buttonText(homePageObj.homePage.postAProjectbtn)).click();
        element(by.xpath("//*[@id='header-post-project']")).click(); //*[@id="header-post-project"]
        browser.getTitle().then(function(pageTitle){
            expect(pageTitle).toEqual("Freelancer | Online Jobs | Freelance Employment | Outsourcing Services | Programmers | Web Design | Freelancers","Invalid Page Title");
        })
    });

    describe("Nested Describe : ",function(){
        it("Validate Page Title Again",function(){
            browser.get(browser.params.login.url1);
            element(by.xpath("//*[@id='header-post-project']")).click();
            browser.getTitle().then(function(pageTitle){
                expect(pageTitle).toContain("Freelancer","Invalid Page Title");
            })
        });
    });
});