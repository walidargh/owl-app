var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var BusinessConstants = require('../constants/BusinessConstants')

var BusinessStore = new Store(AppDispatcher);
var _businesses, _authErrors;

BusinessStore.all = function () {
	return Object.assign({}, _businesses);
};

BusinessStore.find = function (id) {
	return Object.assign({}, _businesses[id]);
};
 
BusinessStore.__onDispatch = function (payload) {
	switch(payload.actionType) {
		case BusinessConstants.BUSINESSES_RECEIVED:
			BusinessStore.resetBenches();
		break;

		case BusinessConstants.BUSINESS_RECEIVED:
			BusinessStore.addBench();
		break;
	}
};
