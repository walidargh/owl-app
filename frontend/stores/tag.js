var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var BusinessConstants = require('../constants/BusinessConstants');

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
	if (payload.actionType === BusinessConstants.TAGS_RECEIVED) {
		resetTags(payload.tags);
	}
};

module.exports = TagStore;

window.TagStore = TagStore;