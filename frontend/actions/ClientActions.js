var ApiUtil = require('../util/api_util');

var ClientActions = {
	fetchBusinesses: ApiUtil.fetchBusinesses,
	createBusiness: ApiUtil.createBusiness
};

module.exports = ClientActions;