var AppDispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/UserConstants');

var UserServerActions = {
	receiveCurrentUser: function(user) {
		AppDispatcher.dispatch({
			actionType: UserConstants.LOGIN,
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

module.exports = UserServerActions;