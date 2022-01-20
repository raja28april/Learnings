const loginPage = require("../../pageobjects/eCommerce/login.page");

const fs = require('fs');
let testData = JSON.parse(fs.readFileSync('test/specs/eCommerce/test-data/testData.json'));
let username = testData[0].username;
let password = testData[0].password;

describe('Ecommerce Application', () => {
        it('E2E test - smoke', function(){
            this.retries(2);//retries with 2 extra runs - arrow function is not allowed for this retries method
            browser.url('/loginpagePractise/');
            console.log("trying with username:" + username+" and password: "+password);
            loginPage.login(username, password);
            loginPage.textInfo.getText()
            expect(loginPage.textInfo).toHaveTextContaining('userame is rahulshettyacademy and Password is learning');
        });
});
