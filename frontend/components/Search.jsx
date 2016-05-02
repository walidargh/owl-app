var React = require('react');
var ClientActions = require('../actions/ClientActions')

var Search = React.createClass({
	getInitialState: function () {
		return ({matches: []});
	},

	fetchMatches: function () {
		ClientActions.fetchMatches();
	},

	render: function () {
		return (
			<ul className="search-bar">
			</ul>
		);
	}
});

module.exports = Search;