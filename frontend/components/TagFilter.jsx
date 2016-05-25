var React = require('react');
var TagStore = require('../stores/tag');
var ClientActions = require('../actions/ClientActions');

var TagFilter = React.createClass({
	getInitialState: function () {
		return ({tags: [], tagsOpen: false, hoodsOpen: false, pricesOpen: false});
	},

	componentWillMount: function () {
		ClientActions.fetchTags();
		this.tagListener = TagStore.addListener(this._onChange);
	},

	componentWillUnmount: function () {
		this.tagListener.remove();
	},

	_onChange: function () {
		this.setState({tags: TagStore.all()});
	},

	toggleTags: function () {
		this.setState(
			{tagsOpen: !this.state.tagsOpen, hoodsOpen: false, pricesOpen: false}
		);

	},

	toggleHoods: function () {
		this.setState(
			{hoodsOpen: !this.state.hoodsOpen, tagsOpen: false, pricesOpen: false}
		);
	},

	togglePrices: function () {
		this.setState(
			{pricesOpen: !this.state.pricesOpen, tagsOpen: false, hoodsOpen: false}
		);
	},

	clearTags: function () {
		$('input:checkbox').removeAttr('checked');
		this.props.clearTags();
	},

	tagFilter: function () {
		var updateTags = this.props.updateTags;
		var tags;
		var checkedTags = this.props.checkedTags;
		if (this.state.tags.length) {
			tags = this.state.tags.map(function (tag) {
				var checked = checkedTags.indexOf(tag.id) === -1 ? false : true;
				return (
						<label key={tag.id} className="tag">
							<input type="checkbox" 
									   onChange={updateTags} 
									 	 value={tag.id}
									 	 checked={checked}
							/>
							{tag.name}
						</label>
				);
			});
		} else {
			return <div/>;
		}
		return tags;
	},

	neighborhoodFilter: function () {
		var hoods = ['Diagon Alley', 'Carkitt', 'Knockturn Alley', 'Hogsmeade', 'Horizont Alley'];
		var updateHoods = this.props.updateHoods;
		var neightborhoods;
		var checkedHoods = this.props.checkedHoods;
		neightborhoods = hoods.map(function (hood, idx) {
			var checked = checkedHoods.indexOf(hood) === -1 ? false : true;
			return (	
				<label key={idx} className="tag">
					<input type="checkbox" 
								 onChange={updateHoods} 
								 value={hood} 
								 checked={checked}
					/>
					{hood}
				</label>
			);
		});
		return neightborhoods;
	},

	priceFilter: function () {
		var allPrices = [1, 2, 3];
		var updatePrices = this.props.updatePrices;
		var prices;
		var checkedPrices = this.props.checkedPrices;
		prices = allPrices.map(function (price, idx) {
			var checked = checkedPrices.indexOf(price) === -1 ? false : true;
			return (
				<label key={idx} className="tag">
					<input type="checkbox"
								 onChange={updatePrices}
								 value={price}
								 checked={checked}
					/>
					{Array(price + 1).join("$")}
				</label>
			);
		});
		return prices;
	},

	filterForm: function () {
		var tagsFilter = this.state.tagsOpen ? this.tagFilter() : <div />;
		var neighborhoodFilter = this.state.hoodsOpen  ? this.neighborhoodFilter() : <div />;
		var priceFilter = this.state.pricesOpen ? this.priceFilter() : <div />;
		var moreHood = this.state.hoodsOpen ? '-' : '+';
		var moreTag = this.state.tagsOpen ? '-' : '+';
		var morePrice = this.state.pricesOpen ? '-' : '+';
		
		if (this.props.location === "/businesses/" || this.props.location === "/businesses") {
			return (
				<div className={"tag-filter-index"}>
					<div className="filter-index-title">Filter</div>
					<div className="filters">
						<div className="filter-name" onClick={this.toggleTags}>Categories {moreTag}</div>
							{tagsFilter}
						<div className="filter-name" onClick={this.toggleHoods}>Neighborhoods {moreHood}</div>
							{neighborhoodFilter}
						<div className="filter-name" onClick={this.togglePrices}>Price {morePrice}</div>
							{priceFilter}
					</div>
					<button onClick={this.clearTags}>Clear Filters</button>
				</div>
			);
		} else {
			return <div />;
		}
	},

	render: function() {

		return (
			<div className="tags-filter">
				{this.filterForm()}
			</div>
		);
	}

});

// <button onClick={this.props.searchBusiness}>Filter</button>

module.exports = TagFilter;