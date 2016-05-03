var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var UserStore = new Store(AppDispatcher);
var myStorage = localStorage;
var _currentUser =  JSON.parse(myStorage.getItem("currentUser"));
var _authErrors;

UserStore.currentUser = function () {
	if (myStorage.getItem("currentUser") === "false") {
		return null;
	} else {
			return _currentUser;
		}
};

UserStore.errors = function () {
	return _authErrors;
};

var login = function(user) {
	_currentUser = user;
	_authErrors = null;
	myStorage.setItem("currentUser", JSON.stringify(user));
	UserStore.__emitChange();
};

var logout = function () {
	_currentUser = null;
	_authErrors = null;
	myStorage.removeItem("currentUser");
	UserStore.__emitChange();
};

var setErrors = function (errors) {
	_authErrors = errors;
	UserStore.__emitChange();
};


UserStore.__onDispatch = function (payload) {
	switch(payload.actionType) {
		case "LOGIN":
			login(payload.user);
		break;
		case "LOGOUT":
			logout();
		break;
		case "ERROR":
			setErrors(payload.errors);
		break;
	}
};

module.exports = UserStore;

window.UserStore = UserStore;
// TODO: Figure out how to properly return currentUser (i.e. use jquery extend)
// TODO: FIgure out how error messages come in and how they are formatted (i.e. [].slice)
// TODO: Remove auth errors from here and move them to their own store, add a form errors component to my forms

//TODO: make methods private, remove 
	// - user store
	// - business store`
//TODO: 
