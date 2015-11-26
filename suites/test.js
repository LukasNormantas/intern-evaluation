define(function (require) {
    var registerSuite = require('intern!object');
    var assert = require('intern/chai!assert');

    var url = 'https://zanox-marketplace.oleksandrg.dev.affiliatewindow.com';

    registerSuite({
        name: 'index',

        'greeting form': function () {
            return this.remote
                .get(url)
                .setFindTimeout(5000)
                .findByCssSelector('body.loaded')
                //.findById('nameField')
                //.click()
                //.type('Elaine')
                //.end()
                //.findByCssSelector('#loginForm input[type=submit]')
                //.click()
                //.end()
                //.findById('greeting')
                //.getVisibleText()
                .then(function (text) {
                    assert.strictEqual(text, 'Hello, Elaine!',
                        'Greeting should be displayed when the form is submitted');
                });
        }
    });
});