class LoginPage {

    get userName(){
        return $('#username')
    }
 
    get password() {
        return $('#password');
    }

    get alert(){
        return $('.alert-danger')
    }

    get signIn(){
        return $('#signInBtn')
    }

    get textInfo(){
        return $('p')
    }

    login(userName,password){
        this.userName.setValue(userName);
        this.password.setValue(password);
        this.signIn.click();
    }

}
module.exports = new LoginPage();
