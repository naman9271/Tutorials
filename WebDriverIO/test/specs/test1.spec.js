describe('Demo Test', () => {

    it('First Test', async () => {
        await browser.url("https://google.com");
        await $('[name="q"]').setValue('WebDriverIO');
        // await $('[name="btnK"]').click();
        await browser.keys('Enter')
        await browser.pause(5000);
    });

});