var ServerActions = require('../actions/ServerActions');

var ApiUtil = {
	fetchBusinesses: function () {
		$.ajax({
			url: '/api/businesses',
			type: 'GET',
			success: ServerActions.receiveBusinesses,
			error: ServerActions.handleError,
		});
	},
	
	fetchSingleBusiness: function (id) {
		$.ajax({
			url: '/api/businesses/' + id,
			type: 'GET',
			success: ServerActions.receiveSingleBusiness,
			error: ServerActions.handleError
		});
	},

	fetchMatches: function (data) {
		$.ajax({
			url: '/api/businesses/search',
			type: 'GET',
			data: data,
			success: ServerActions.receiveBusinesses,
			error: ServerActions.handleError
		});
	},

	fetchTags: function () {
		$.ajax({
			url: 'api/tags',
			type: 'GET',
			success: ServerActions.receiveTags,
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

	createReview: function (data) {
		$.ajax({
			url: 'api/reviews',
			type: 'POST',
			data: {review: data},
			success: ServerActions.receiveSingleReview,
			error: ServerActions.handleError
		});
	},

	uploadPhoto: function (data) {
		$.ajax({
			url: 'api/photos',
			type: 'POST',
			data: {photo: data},
			success: ServerActions.receiveSinglePhoto,
			error: ServerActions.handleError
		});
	}

};

module.exports = ApiUtil;