var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var TagStore = new Store(AppDispatcher);
var _tags = [];

TagStore.all = function () {
	return _tags;
};

var resetTags = function (tags) {
	_tags = tags;
	TagStore.__emitChange();
};


TagStore.__onDispatch = function (payload) {
	resetTags(payload.tags);
};

module.exports = TagStore;

window.TagStore = TagStore;