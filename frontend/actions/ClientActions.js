var ApiUtil = require('../util/ApiUtil');

var ClientActions = {
	fetchBusinesses: ApiUtil.fetchBusinesses,
	fetchSingleBusiness: ApiUtil.fetchSingleBusiness,
	fetchMatches: ApiUtil.fetchMatches,
	createBusiness: ApiUtil.createBusiness,
	createReview: ApiUtil.createReview
};

module.exports = ClientActions;