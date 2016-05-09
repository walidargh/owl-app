var React = require('react');
var TagStore = require('../stores/tag');
var ClientActions = require('../actions/ClientActions');

var TagFilter = React.createClass({
	getInitialState: function () {
		return ({tags: [], tagsOpen: false, hoodsOpen: false});
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
		this.setState({tagsOpen: !this.state.tagsOpen});
	},

	toggleHoods: function () {
		this.setState({hoodsOpen: !this.state.hoodsOpen});
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
								 checed={checked}
					/>
					{hood}
				</label>
			);
		});
		return neightborhoods;
	},

	filterForm: function () {
		var tagsFilter = this.state.tagsOpen ? this.tagFilter() : <div />;
		var neighborhoodFilter = this.state.hoodsOpen  ? this.neighborhoodFilter() : <div />;
		var moreHood = this.state.hoodsOpen ? '-' : '+';
		var moreTag = this.state.tagsOpen ? '-' : '+';


		if (this.props.location === "/businesses/") {
			return (
				<div className={"tag-filter-index"}>
					<div className="filter-index-title">Filter</div>
					<div className="filters">
						<div className="filter-name" onClick={this.toggleTags}>Categories {moreTag}</div>
							{tagsFilter}
						<div className="filter-name" onClick={this.toggleHoods}>Neighborhoods {moreHood}</div>
						{neighborhoodFilter}
					</div>
					<button onClick={this.props.searchBusiness}>Filter</button>
					<button onClick={this.clearTags}>Clear</button>
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

module.exports = TagFilter;