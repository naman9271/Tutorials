class LoginPage{
    get usernameTextbox(){
        return $('#username')
    }
    get passwordTextbox(){
        return $('#password')
    }
    get loginButton(){
        return $('button[type="submit"]')
    }
    get LoginMessage(){
        return $('#flash')
    }

    async login(username,password){
        await this.usernameTextbox.setValue(username)
        await this.passwordTextbox.setValue(password)
        await this.loginButton.click()
    }

    async checkmessage(msg){
        await expect(this.LoginMessage).toHaveText(
            expect.stringContaining(msg)
        );
    }
}

module.exports = new LoginPage()