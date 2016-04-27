var AppDispatcher = require('../dispatcher/dispatcher');
var BusinessConstants = require('../constants/BusinessConstants')
// TODO build business constants
var ApiActions = {
	receiveAll: function(businesses) {
		AppDispatcher.dispatch({
			actionType: BusinessConstants.BUSINESSES_RECEIVED, 
			businesses: businesses
		});
	},
	receiveSingleBusiness: function (business) {
		AppDispatcher.dispatch({
			actionType: BusinessConstants.BUSINESS_RECEIVED,
			business: business
		});
	}
};

module.exports = ApiActions;