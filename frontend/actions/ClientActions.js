var ApiUtil = require('../util/ApiUtil');

var ClientActions = {
	fetchBusinesses: ApiUtil.fetchBusinesses,
	fetchSingleBusiness: ApiUtil.fetchSingleBusiness,
	createBusiness: ApiUtil.createBusiness,
	createReview: ApiUtil.createReview
};

module.exports = ClientActions;