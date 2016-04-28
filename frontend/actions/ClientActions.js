var ApiUtil = require('../util/ApiUtil');

var ClientActions = {
	fetchBusinesses: ApiUtil.fetchBusinesses,
	createBusiness: ApiUtil.createBusiness
};

module.exports = ClientActions;