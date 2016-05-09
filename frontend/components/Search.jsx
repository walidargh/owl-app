var React = require('react');
var ClientActions = require('../actions/ClientActions');
var BusinessStore = require('../stores/business');
var hashHistory = require('react-router').hashHistory;
var TagFilter = require('./TagFilter');

var Search = React.createClass({
	getInitialState: function () {
		return ({matches: [], query: "", tag_ids: []});
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

	updateTags: function (event) {
		var tag_ids = this.state.tag_ids;
		var tagId = parseInt(event.target.value);
		var index = tag_ids.indexOf(tagId);
		if (index === -1) {
			tag_ids.push(tagId);
		} else {
			tag_ids.splice(index, 1);
		}
		this.setState({tag_ids: tag_ids});
	},

	searchBusiness: function (callback) {
		var search = {query: this.state.query, tag_ids: this.state.tag_ids};
		ClientActions.fetchMatches(search);
		if (callback) {callback.call();}
	},

	showBusiness: function (event) {
		event.preventDefault();
		this.searchBusiness(hashHistory.push('/businesses/'));
		
	},

	render: function () {
		return (
			<div className="search">
				<TagFilter updateTags={this.updateTags} />
				<input className="search-bar" 
								type="text" 
								value={this.state.query}
								onChange={this.updateQuery}
								placeholder="Search by Business Name"
				/>
				<div className="button-wrapper">
					<button className="search-button" onClick={this.showBusiness}>
						Search
					</button> 
				</div>
			</div>
		);
	}
});

module.exports = Search;

window.history = hashHistory;