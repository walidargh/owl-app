var React = require('react');
var ClientActions = require('../actions/ClientActions');
var BusinessStore = require('../stores/business');
var hashHistory = require('react-router').hashHistory;


var Search = React.createClass({
	getInitialState: function () {
		return ({matches: [], query: ""});
	},

	componentDidMount: function () {
		this.state.query = "";
		this.searchBusiness();
		this.businessListener = BusinessStore.addListener(this._onChange);
	},

	componentWillUnmount: function () {
		this.businessListener.remove();
	},

	_onChange: function () {
		var matches = BusinessStore.all();
		this.setState({matches: matches});
	},

	updateQuery: function (event) {
		var query = event.target.value;
		if (this.props.location.pathname === "/businesses/") {
			this.setState({query: query}, this.searchBusiness);
		} else {
			this.setState({query: query});
		}
	},

	searchBusiness: function (callback) {
		ClientActions.fetchMatches(this.state.query);
		if (callback) {callback.call();}
	},

	showBusiness: function () {
		this.searchBusiness(hashHistory.push('/businesses/'));
		
	},

	render: function () {
		return (
			<div className="search">
				<input className="search-bar" 
								type="text" 
								value={this.state.query}
								onChange={this.updateQuery}
								placeholder="Search by Business Name"
				/>
				<div className="button-wrapper">
					<button className="search-button" onClick={this.showBusiness}>Search</button> 
				</div>
			</div>
		);
	}
});

module.exports = Search;

window.history = hashHistory;