var UserServerActions = require('../actions/UserServerActions');

var UserApiUtil = {
	fetchCurrentUser: function () {
		$.ajax({
			url: '/api/session',
			type: 'GET',
			success: UserServerActions.receiveCurrentUser,
			error: UserServerActions.handleError,
		});
	},

	signin: function (user) {
		$.ajax({
			url: '/api/session',
			type: 'POST',
			data: {user: user},
			success: UserServerActions.receiveCurrentUser,
			error: UserServerActions.handleError

		});
	},

	logout: function () {
		$.ajax({
			url: '/api/session',
			type: 'DELETE',
			success: UserServerActions.removeCurrentUser,
			error: UserServerActions.handleError
		});
	},

	create: function (userData) {
		$.ajax({
			url: '/api/user',
			type: 'POST',
			data: {user: userData},
			success: function (user) {
				console.log('we have been successful');
				UserServerActions.receiveCurrentUser(user);
			},
			// ,
			error: UserServerActions.handleError
		});
	},

	destroy: function (user) {
		$.ajax({
			url: '/api/user',
			// TODO: do I need to include user.id?
			type: 'DELETE',
			success: UserServerActions.removeCurrentUser,
			error: UserServerActions.handleError
		});
	}
};

module.exports = UserApiUtil;
