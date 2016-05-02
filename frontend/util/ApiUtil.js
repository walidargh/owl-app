var ServerActions = require('../actions/ServerActions');

var ApiUtil = {
	fetchBusinesses: function () {
		$.ajax({
			url: '/api/businesses',
			type: 'GET',
			success: ServerActions.receiveBusinesses,
			error: ServerActions.handleError,
		});
		// TODO: create handleError and receiveBusinesses
	},
	fetchSingleBusiness: function (id) {
		$.ajax({
			url: '/api/businesses/' + id,
			type: 'GET',
			success: ServerActions.receiveSingleBusiness,
			error: ServerActions.handleError
		});
	},
	createBusiness: function (data) {
		$.ajax({
			url: '/api/businesses',
			type: 'POST',
			data: {business: data},
			success: ServerActions.receiveSingleBusiness,
			error: ServerActions.handleError
		});
	},

	fetchMatches: function (query) {
		$.ajax({
			url: '/api/businesses/search',
			type: 'GET',
			data: {query: query},
			success: ServerActions.receiveBusinesses,
			error: ServerActions.handleError
		});
	},

	createReview: function (data) {
		$.ajax({
			url: 'api/reviews',
			type: 'POST',
			data: {review: data},
			success: ServerActions.receiveSingleReview,
			error: ServerActions.handleError
		});
	}

};

module.exports = ApiUtil;