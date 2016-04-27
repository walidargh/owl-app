var UserActions = require('../actions/UserActions');

var UserApiUtil = {
	fetchCurrentUser: function () {
		$.ajax({
			url: '/api/session',
			type: 'GET',
			success: UserActions.receiveCurrentUser,
			error: UserActions.handleError,
		});
	},

	signin: function (user) {
		$.ajax({
			url: '/api/session',
			type: 'POST',
			data: {user: user},
			success: UserActions.receiveCurrentUser,
			error: UserActions.handleError

		});
	},

	logout: function () {
		$.ajax({
			url: '/api/session',
			type: 'DELETE',
			success: UserActions.removeCurrentUser,
			error: UserActions.handleError
		});
	},

	create: function (userData) {
		console.log({user: userData})
		$.ajax({
			url: '/api/user',
			type: 'POST',
			data: {user: userData},
			success: UserActions.receiveCurrentUser,
			error: UserActions.handleError
		});
	},

	destroy: function (user) {
		$.ajax({
			url: '/api/user',
			// TODO: do I need to include user.id?
			type: 'DELETE',
			success: UserActions.removeCurrentUser,
			error: UserActions.handleError
		});
	}
};

module.exports = UserApiUtil;
