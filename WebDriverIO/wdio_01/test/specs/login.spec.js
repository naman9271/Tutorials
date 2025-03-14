const { expect } = require('@wdio/globals');
const LoginPage = require('../pages/login.page')
describe("Demo Test",()=>{

    // it("Login Test", async()=>{
    //     browser.url('https://the-internet.herokuapp.com/login');
    //     const username = await $('#username');
    //     const password = await $('#password');
    //     const button = await $('button[type="submit"]');

    //     await username.setValue('tomsmith');
    //     await password.setValue('SuperSecretPassword!');
    //     // await $('.radius').click()
    //     await button.click();

    //     const successMessage = await $('#flash');
    //     await expect(successMessage).toHaveText(
    //         expect.stringContaining('You logged into a secure area!')
    //     );
    // });
    it('First Test', async ()=>{
        await browser.url('https://the-internet.herokuapp.com/login')
        await LoginPage.login('tomsmith','SuperSecretPassword!')
        await LoginPage.checkmessage('You logged into a secure area!')

    })
});