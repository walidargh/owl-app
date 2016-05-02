var React = require('react');
var BusinessStore = require('../stores/business');
var ClientActions = require('../actions/ClientActions');
var PhotoIndex = React.createClass({
	getInitialState: function () {
		return ({photos: [], modalIsOpen: false});
	},

	componentWillMount: function () {
		this.businessListener.BusinessStore.addListener(this._onChange);
		ClientActions.fetchPhotos();
	},

	_onChange: function () {
		var businesses = BusinessStore.all();
	},


	render: function() {
		return (
			<div />
		);
	}

});

module.exports = PhotoIndex;