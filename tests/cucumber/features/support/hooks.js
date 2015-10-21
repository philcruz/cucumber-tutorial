(function () {

	'use strict';

	module.exports = function () {

		this.Before(function (callback) {
			console.log('running Before...');
			this.server.call('reset');
			this.server.call('addUser', {email: "bob@example.com"});
		});

	};

})();


// /tests/cucumber/features/support/hooks.js
