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
		debugger
		this.setState({query: query}, this.searchBusiness);
		// this.searchBusiness();
	},

	searchBusiness: function () {
		ClientActions.fetchBusinesses(this.state.query);
	},

	// matchBusinesses: function () {
	// 	var query = this.state.query.toLowerCase();
	// 	var matches = [];
	// 	var businesses = BusinessStore.all();
	// 	debugger
	// 	Object.keys(businesses).forEach(function (id) {
	// 		if (businesses[id].name.toLowerCase().indexOf(query) !==-1) {
	// 			matches.push(businesses[id]);
	// 		}
	// 	});

	// 	this.setState({matches: matches});
	// 	debugger
	// },

	render: function () {
		// debugger
		// var matches = this.state.matches;
		// var matchList = matches.map(function (match) {
		// 	return <li>{match.name}</li>;
		// });
		debugger
		return (
			<ul className="search-bar">
				<input type="text" value={this.state.query} onChange={this.updateQuery}/> 
			</ul>
		);
	}
});

module.exports = Search;