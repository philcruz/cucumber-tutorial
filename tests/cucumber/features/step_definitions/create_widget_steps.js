(function () {

	'use strict';

	module.exports = function () {

		this.Given(/^I am logged in$/, function () {
			client.url(process.env.ROOT_URL);
			client.waitForExist('body *');
			client.waitForVisible('body *');
			client.waitForExist('#login-sign-in-link');
			client.click('#login-sign-in-link');
			client.setValue('#login-email', 'bob@example.com');
			client.setValue('#login-password', 'testtest');
			client.click('#login-buttons-password');
		});

		this.When(/^I fill in the name with "([^"]*)"$/, function (arg1) {
			browser.waitForVisible('#name');
			browser.setValue('#name', 'Alpha');
		});

		this.When(/^I click the button "([^"]*)"$/, function (arg1) {
			client.click('#createWidget');
		});

		this.Then(/^I should see a widget named "([^"]*)"$/, function (arg1) {
			browser.waitForExist('.widget-name');
			var widgetName = client.getText('.widget-name');
			expect(widgetName).toEqual("Alpha");
		});

	}

})();
