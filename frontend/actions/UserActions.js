var ApiUtil = require('../util/ApiUtil.js');

var UserActions = {
	fetchCurrentUser: function () {
		ApiUtil.fetchCurrentUser();
	},

	login: function (user) {
		ApiUtil.login(user);
	},

	logout: function () {
		ApiUtil.logout();
	},

	create: function (userData) {
		ApiUtil.create(userData);
	},

	destroy: function (user) {
		ApiUtil.destroy(user);
	}
};

module.exports = UserActions;
