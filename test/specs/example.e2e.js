import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        // await LoginPage.open();

        // await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        // await expect(SecurePage.flashAlert).toBeExisting();
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!');
        browser.url("url")
        //browser.pause(5000);
       // console.log("the title is" + browser.getTitle());
        //browser.pause(5000);
        //expect(browser).toHaveTitleContaining("IDFC FIRST Bank");
        $('input[data-test-id="phone-number-id"]').setValue('8888444422');
        $('button[data-testid="submit-button-id"]').click();
    });
});


