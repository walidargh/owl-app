var ApiUtil = require('../util/ApiUtil');

var ClientActions = {
	fetchBusinesses: ApiUtil.fetchBusinesses,
	fetchSingleBusiness: ApiUtil.fetchSingleBusiness,
	searchBusinesses: ApiUtil.searchBusinesses,
	createBusiness: ApiUtil.createBusiness,
	createReview: ApiUtil.createReview
};

module.exports = ClientActions;