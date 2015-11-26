define(function (require) {
    // the page object is created as a constructor
    // so we can provide the remote Command object
    // at runtime
    function LoginPage(remote) {
        this.remote = remote;
    }

    var url = 'https://zanox-marketplace.oleksandrg.dev.affiliatewindow.com';
    //var url = 'https://marketplace.zanox.com';


    LoginPage.prototype = {
        constructor: LoginPage,


        // the login function accepts username and password
        // and returns a promise that resolves to `true` on
        // success or rejects with an error on failure
        login: function (username, email, password) {

            //console.log("username="+username+");

            return this.remote
                .get(url + '/login')

                .findByCssSelector('#email')
                    .click()
                    .clearValue()
                    .type(email)
                .end()

                //.findByCssSelector('form.loginForm')
                //.fillFormWithData({
                //    email: username,
                //    "#password": password
                //})

                .findByCssSelector('#password')
                    .click()
                    .clearValue()
                    .type(password)
                .end()

                .findByCssSelector('form.loginForm')
                    .submit()
                .end()

                //.sleep(5000)

                .findByCssSelector("#header #dateTime > span")
                .getVisibleText()
                .then(function (actualUserName) {
                    return actualUserName && actualUserName == username;
                });
        }
    };

    return LoginPage;
});