var AppDispatcher = require('../dispatcher/dispatcher');
var BusinessConstants = require('../constants/BusinessConstants');

var ServerActions = {
	receiveBusinesses: function(businesses) {
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
	},

	receiveSingleReview: function (review) {
		AppDispatcher.dispatch({
			actionType: BusinessConstants.REVIEW_RECEIVED,
			review: review	
		});
	},

};

module.exports = ServerActions;