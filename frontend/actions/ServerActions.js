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

	receiveMatches: function (matches) {
		AppDispatcher.dispatch({
			actionType: BusinessConstants.MATCHES_RECEIVED,
			business: matches
		});
	},

	receiveTags: function (tags) {
		AppDispatcher.dispatch({
			actionType: BusinessConstants.TAGS_RECEIVED,
			tags: tags
		});
	},

	receiveSingleReview: function (review) {
		AppDispatcher.dispatch({
			actionType: BusinessConstants.REVIEW_RECEIVED,
			review: review	
		});
	},

	receiveSinglePhoto: function (photo) {
		AppDispatcher.dispatch({
			actionType: BusinessConstants.PHOTO_RECIEVED,
			photo: photo
		});
	},
	
	handleError: function (error) {
		AppDispatcher.dispatch({
			actionType: BusinessConstants.ERROR,
			errors: error.responseJSON
		});
	},

};

module.exports = ServerActions;