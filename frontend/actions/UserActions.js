var UserApiUtil = require('../util/UserApiUtil.js');
var AppDispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/UserConstants');

var UserActions = {
	fetchCurrentUser: function () {
		UserApiUtil.fetchCurrentUser();
	},

	login: function (user) {
		UserApiUtil.login(user);
	},

	logout: function () {
		UserApiUtil.logout();
	},

	guestlogin: function () {

	},

	create: function (userData) {
		console.log(userData);
		UserApiUtil.create(userData);
	},

	destroy: function (user) {
		UserApiUtil.destroy(user);
	},

	receiveCurrentUser: function(user) {
		AppDispatcher.dispatch({
			actionType: UserConstants.login,
			user: user
		});
	},

	handleError: function (error) {
		AppDispatcher.dispatch({
			actionType: UserConstants.ERROR,
			errors: error.responseJSON.errors
		});
	},

	removeCurrentUser: function () {
		AppDispatcher.dispatch({
			actionType: UserConstants.LOGOUT
		});
	}

};

module.exports = UserActions;
