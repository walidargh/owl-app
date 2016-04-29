var AppDispatcher = require('../dispatcher/dispatcher');
var BusinessConstants = require('../constants/BusinessConstants');

var ServerActions = {
	receiveAll: function(businesses) {
		AppDispatcher.dispatch({
			actionType: BusinessConstants.BUSINESSES_RECEIVED, 
			businesses: businesses
		});
	},
	receiveSingleBusiness: function (business) {
		console.log('receiving just one business')
		AppDispatcher.dispatch({
			actionType: BusinessConstants.BUSINESS_RECEIVED,
			business: business
		});
	}
};

module.exports = ServerActions;