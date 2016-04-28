var UserApiUtil = require('../util/UserApiUtil.js');
var AppDispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/UserConstants');

var UserActions = {

	fetchCurrentUser: function () {
		console.log('about to fetchCurrentUser from UserActions');
		UserApiUtil.fetchCurrentUser();
	},

	login: function (user) {
		UserApiUtil.signin(user);
	},

	logout: function () {
		UserApiUtil.logout();
	},

	guestlogin: function () {

	},

	create: function (userData) {
		console.log('creating in UserActions');
		UserApiUtil.create(userData);
	},

	destroy: function (user) {
		UserApiUtil.destroy(user);
	}

};

module.exports = UserActions;
