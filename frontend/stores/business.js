var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var BusinessConstants = require('../constants/BusinessConstants');

var BusinessStore = new Store(AppDispatcher);
var _businesses = {};
// var _currentBusiness = {};
var _errors = [];

BusinessStore.all = function () {
	return Object.assign({}, _businesses);
};

BusinessStore.find = function (id) {
	return Object.assign({}, _businesses[id]);
};

BusinessStore.errors = function () {
	debugger
	return _errors;
};
// BusinessStore.currentBusiness = function () {
// 	return Object.assign({}, _currentBusiness);
// };
 
var resetBusinesses = function (businesses) {
	_businesses = {};
	businesses.forEach(function (business) {
		 _businesses[business.id] = business;
	});
	BusinessStore.__emitChange();
};

var addBusiness = function (business) {
	// _currentBusiness = business;
	_businesses[business.id] = business;
	BusinessStore.__emitChange();
};

var addReview = function (review) {
	_businesses[review.business_id].reviews.push(review);
	BusinessStore.__emitChange();
};

var addPhoto = function (photo) {
	// _currentBusiness.photos.push(photo);
	_businesses[photo.business_id].photos.push(photo);
	BusinessStore.__emitChange();
};

var setErrors = function (error) {
	_errors = error;
	BusinessStore.__emitChange();
};

BusinessStore.__onDispatch = function (payload) {
	switch(payload.actionType) {
		case BusinessConstants.BUSINESSES_RECEIVED:
			resetBusinesses(payload.businesses);
		break;

		case BusinessConstants.BUSINESS_RECEIVED:
			addBusiness(payload.business);
		break;

		case BusinessConstants.REVIEW_RECEIVED:
			addReview(payload.review);
		break;

		case BusinessConstants.PHOTO_RECIEVED:
			addPhoto(payload.photo);
		break;

		case BusinessConstants.ERROR:
			setErrors(payload.errors);
		break;
	}
};

module.exports = BusinessStore;

window.BusinessStore = BusinessStore;