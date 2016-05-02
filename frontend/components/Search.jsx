var React = require('react');
var ClientActions = require('../actions/ClientActions');
var BusinessStore = require('../stores/business');


var Search = React.createClass({
	getInitialState: function () {
		return ({matches: [], query: ""});
	},

	componentDidMount: function () {
		this.businessListener = BusinessStore.addListener(this._onChange);
	},

	_onChange: function () {
		var matches = BusinessStore.all();
		this.setState({matches: matches});
	},

	updateQuery: function (event) {
		var query = event.target.value;
		this.setState({query: query}, this.searchBusiness);
		// this.searchBusiness();
	},

	searchBusiness: function () {
		ClientActions.fetchMatches(this.state.query);
	},

	render: function () {
		return (
			<ul className="search-bar">
				<input type="text" value={this.state.query} onChange={this.updateQuery}/> 
			</ul>
		);
	}
});

module.exports = Search;