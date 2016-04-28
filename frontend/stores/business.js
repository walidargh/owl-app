var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var BusinessConstants = require('../constants/BusinessConstants');

var BusinessStore = new Store(AppDispatcher);
var _businesses = {};
var _authErrors = {};

BusinessStore.all = function () {
	return Object.assign({}, _businesses);
};

BusinessStore.find = function (id) {
	return Object.assign({}, _businesses[id]);
};
 
BusinessStore.resetBusinesses = function (businesses) {
	businesses.forEach(function (business) {
		 _businesses[business.id] = business;
	});
	this.__emitChange();
};

BusinessStore.__onDispatch = function (payload) {
	switch(payload.actionType) {
		case BusinessConstants.BUSINESSES_RECEIVED:
			BusinessStore.resetBusinesses(payload.businesses);
		break;

		case BusinessConstants.BUSINESS_RECEIVED:
			BusinessStore.addBusiness();
		break;
	}
};

module.exports = BusinessStore;
