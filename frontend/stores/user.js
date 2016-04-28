var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var UserStore = new Store(AppDispatcher);

var _currentUser, _authErrors;
// still need to work these out in the backend

UserStore.__onDispatch = function (payload) {
	switch(payload.actionType) {
		case "LOGIN":
			console.log('About to log into the store from dispatch');
			UserStore.login(payload.user);
		break;
		case "LOGOUT":
			UserStore.logout();
		break;
		case "ERROR":
			UserStore.setErrors(payload.errors);
		break;
	}
};

UserStore.login = function(user) {
	console.log('About to log into the store from user store login');
	_currentUser = user;
	_authErrors = null;
	UserStore.__emitChange();
};

UserStore.logout = function () {
	_currentUser = null;
	_authErrors = null;
	UserStore.__emitChange();
};

UserStore.setErrors = function (errors) {
	_authErrors = errors;
	UserStore.__emitChange();
};

UserStore.currentUser = function () {
	return _currentUser;
};

UserStore.errors = function () {
	return _authErrors;
};

module.exports = UserStore;

// TODO: Figure out how to properly return currentUser (i.e. use jquery extend)
// TODO: FIgure out how error messages come in and how they are formatted (i.e. [].slice)
