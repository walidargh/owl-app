var UserApiUtil = require('../util/UserApiUtil.js');
var AppDispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/UserConstants');

var UserActions = {

	fetchCurrentUser: function () {
		UserApiUtil.fetchCurrentUser();
	},

	login: function (user) {
		UserApiUtil.signin(user);
	},

	logout: function () {
		debugger
		UserApiUtil.logout();
	},

	guestlogin: function () {

	},

	create: function (userData) {
		UserApiUtil.create(userData);
	},

	destroy: function (user) {
		UserApiUtil.destroy(user);
	}

};

module.exports = UserActions;
