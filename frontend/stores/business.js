var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var BusinessConstants = require('../constants/BusinessConstants');

var BusinessStore = new Store(AppDispatcher);
var _businesses = {};
// var _currentBusiness = {};
var _authErrors = {};

BusinessStore.all = function () {
	return Object.assign({}, _businesses);
};

BusinessStore.find = function (id) {
	return Object.assign({}, _businesses[id]);
};

// BusinessStore.currentBusiness = function () {
// 	return Object.assign({}, _currentBusiness);
// };
 
BusinessStore.resetBusinesses = function (businesses) {
	_businesses = {};
	businesses.forEach(function (business) {
		 _businesses[business.id] = business;
	});
	this.__emitChange();
};

BusinessStore.addBusiness = function (business) {
	// _currentBusiness = business;
	_businesses[business.id] = business;
	this.__emitChange();
};

BusinessStore.addReview = function (review) {
	// _currentBusiness.reviews.push(review);
	_businesses[review.business_id].reviews.push(review);
	this.__emitChange();
};

BusinessStore.addPhoto = function (photo) {
	// _currentBusiness.photos.push(photo);
	_businesses[photo.business_id].photos.push(photo);
	this.__emitChange();
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

		case BusinessConstants.PHOTO_RECIEVED:
			BusinessStore.addPhoto(payload.photo);
		break;
	}
};

module.exports = BusinessStore;

window.BusinessStore = BusinessStore;