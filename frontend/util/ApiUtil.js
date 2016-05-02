var ServerActions = require('../actions/ServerActions');

var ApiUtil = {
	fetchBusinesses: function () {
		$.ajax({
			url: '/api/businesses',
			type: 'GET',
			success: ServerActions.receiveAll,
			error: ServerActions.handleError,
		});
		// TODO: create handleError and receiveBusinesses
	},
	fetchSingleBusiness: function (id) {
		console.log('fetchSingleBusiness');
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

	searchBusinesses: function (query) {
		$.ajax({
			url: '/api/businesses'
		})
	}
	createReview: function (data) {
		debugger
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