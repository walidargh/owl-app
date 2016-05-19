var React = require('react');
var ClientActions = require('../actions/ClientActions');
var BusinessStore = require('../stores/business');
var hashHistory = require('react-router').hashHistory;
var TagFilter = require('./TagFilter');

var Search = React.createClass({
	getInitialState: function () {
		return ({matches: [], query: "", tag_ids: [], hoods: [], prices: []});
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
		this.setState({tag_ids: tag_ids}, this.searchBusiness);
	},

	updateHoods: function (event) {
		var hoods = this.state.hoods;
		var hood = event.target.value;
		var index = hoods.indexOf(hood);
		if (index === -1) {
			hoods.push(hood);
		} else {
				hoods.splice(index, 1);
			}
		this.setState({hoods: hoods}, this.searchBusiness);
	},

	updatePrices: function (event) {
		var prices = this.state.prices;
		var price = parseInt(event.target.value);
		var index = prices.indexOf(price);
		if (index === -1) {
			prices.push(price);
		} else {
				prices.splice(index, 1);
			}
		this.setState({prices: prices}, this.searchBusiness);
	},

	clearTags: function (event) {
		this.setState({tag_ids: [], hoods: [], prices: []}, this.searchBusiness);
	},

	searchBusiness: function (event, callback) {
		if (event) {
			event.preventDefault();
		}

		var search = {query: this.state.query, tag_ids: this.state.tag_ids, hoods: this.state.hoods, prices: this.state.prices};
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
				<div className="tag-filter-wrapper">
					<TagFilter updateTags={this.updateTags} 
										 updateHoods={this.updateHoods}
										 updatePrices={this.updatePrices}
										 searchBusiness={this.searchBusiness}
										 checkedTags={this.state.tag_ids}
										 checkedHoods={this.state.hoods} 
										 checkedPrices={this.state.prices}
										 clearTags={this.clearTags} 
										 location={this.props.location.pathname}/>
				</div>
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