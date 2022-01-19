const loginPage = require("../../pageobjects/eCommerce/login.page");
const shopPage = require("../../pageobjects/eCommerce/shop.page");
const reviewPage = require("../../pageobjects/eCommerce/review.page");
const expectchai = require('chai').expect;
const submitPage = require("../../pageobjects/eCommerce/submit.page");

const fs = require('fs');
let credentials = JSON.parse(fs.readFileSync('test/specs/eCommerce/test-data/testData.json'));

describe('Ecommerce Application', () => {
    credentials.forEach(({ username, password })=> {
        it('E2E test', () => {

            var products = ['Blackberry', 'Nokia Edge'];
            browser.url('https://rahulshettyacademy.com/loginpagePractise/');
            console.log("trying with username:" + username+" and password: "+password);
            loginPage.login(username, password);
            // console.log(loginPage.alert.getText() + " is the text I am seeing on the screen");

            // browser.waitUntil(()=>loginPage.signIn.getAttribute('value')==='Sign In',
            // {timeout:10000, timeoutMsg: 'Error message did not appear'})
            // console.log(loginPage.alert.getText() + " is the text I am seeing on the screen");
            // loginPage.textInfo.getText()
            // expect(loginPage.textInfo).toHaveTextContaining('username is rahulshettyacademy and Password is learning');

            shopPage.checkout.waitForExist();
            var products = ['Blackberry', 'Nokia Edge'];
            shopPage.addProductsToCart(products);
            shopPage.checkout.click()

            const sumOfProducts = reviewPage.sumOfProducts()
            const totalIntValue = reviewPage.totalFormattedPrice()
            expectchai(sumOfProducts).to.equal(totalIntValue)
            reviewPage.checkout.click()
         
            submitPage.locationInputField.setValue("ind");
            submitPage.ellipsis.waitForExist({ reverse: true })
            submitPage.locationIndia.click()
            submitPage.purchaseButton.click();
            expect(submitPage.successMsg).toHaveTextContaining("Success");
        });
    });
});