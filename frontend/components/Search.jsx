var React = require('react');
var ClientActions = require('../actions/ClientActions');
var BusinessStore = require('../stores/business');
var hashHistory = require('react-router').hashHistory;


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
	},

	searchBusiness: function () {
		ClientActions.fetchMatches(this.state.query);
	},

	showBusiness: function () {
		hashHistory.push('/businesses/');
	},

	render: function () {
		return (
			<div className="search">
				<input className="search-bar" type="text" value={this.state.query} onChange={this.updateQuery}/>
				<button onClick={this.showBusiness}>Search</button> 
			</div>
		);
	}
});

module.exports = Search;