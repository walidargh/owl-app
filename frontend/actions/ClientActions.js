var ApiUtil = require('../util/ApiUtil');

var ClientActions = {
	fetchBusinesses: ApiUtil.fetchBusinesses,
	fetchSingleBusiness: ApiUtil.fetchSingleBusiness,
	fetchMatches: ApiUtil.fetchMatches,
	fetchTags: ApiUtil.fetchTags,
	createBusiness: ApiUtil.createBusiness,
	createReview: ApiUtil.createReview,
	uploadPhoto: ApiUtil.uploadPhoto
};

module.exports = ClientActions;