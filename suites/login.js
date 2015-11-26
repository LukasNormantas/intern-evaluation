define([
    'intern!object',
    'intern/chai!assert',
    'intern!bdd',
    '../pages/LoginPage'
], function (registerSuite, assert, bdd, LoginPage) {

    registerSuite(function () {

        bdd.describe('MP - Provider with right credentials', function () {

            var email = 'oleksandr.golub@zanox.com',
                password = '',
                firstName = 'Oleksandr';

            bdd.describe('which didnt accept T&C ', function () {

                var loginPage;

                bdd.before(function () {

                    loginPage = new LoginPage(this.remote);

                });

                bdd.describe('when he enters his credentials on the marketplace login form', function () {

                    bdd.it('should be allowed to login', function () {
                        return loginPage
                            .login(firstName, email, password)
                            .then(function (loggedIn) {
                                assert.isTrue(loggedIn, 'Valid username and password should log in successfully');
                            });

                    });

                });

            });

            //bdd.before(function () {
            //    // executes before suite starts
            //});
            //
            //bdd.after(function () {
            //    // executes after suite ends
            //});
            //
            //bdd.beforeEach(function () {
            //    // executes before each test
            //});
            //
            //bdd.afterEach(function () {
            //    // executes after each test
            //});
            //
            //bdd.it('should do foo', function () {
            //    // a test case
            //});
            //
            //bdd.it('should do bar', function () {
            //    // another test case
            //});



            // …
        });
    });
});