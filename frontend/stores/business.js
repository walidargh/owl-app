var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var BusinessConstants = require('../constants/BusinessConstants');

var BusinessStore = new Store(AppDispatcher);
var _businesses = {};
var _matches = {};
var _authErrors = {};

BusinessStore.all = function () {
	return Object.assign({}, _businesses);
};

// BusinessStore.matches = function (matches) {
// 	return Object.assign({}, _matches);
// };

// BusinessStore.resetMatches= function (matches) {
// 	_matches = {};
// 	matches.forEach(function (match) {
// 		 _matches[match.id] = match;
// 	});
// 	this.__emitChange();
// };

BusinessStore.find = function (id) {
	return Object.assign({}, _businesses[id]);
};
 
BusinessStore.resetBusinesses = function (businesses) {
	_businesses = {};
	businesses.forEach(function (business) {
		 _businesses[business.id] = business;
	});
	this.__emitChange();
};

BusinessStore.addBusiness = function (business) {
	_businesses[business.id] = business;
	this.__emitChange();
};

BusinessStore.addReview = function (review) {
	_businesses[review.business_id].reviews.push(review);
	this.__emitChange();
};

BusinessStore.addPhoto = function (photo) {
	_businesses[photo.business_id].photos.push(photo);
};


BusinessStore.__onDispatch = function (payload) {
	switch(payload.actionType) {
		case BusinessConstants.BUSINESSES_RECEIVED:
			BusinessStore.resetBusinesses(payload.businesses);
		break;

		case BusinessConstants.BUSINESS_RECEIVED:
			BusinessStore.addBusiness(payload.business);
		break;

		case BusinessConstants.REVIEW_RECEIVED:
			BusinessStore.addReview(payload.review);
		break;

		// case BusinessConstants.MATCHES_RECEIVED:
		// 	BusinessStore.resetMatches(payload.matches);
		// break;
	}
};

module.exports = BusinessStore;
