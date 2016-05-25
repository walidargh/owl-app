var React = require('react');
var UserStore = require('../stores/user');
var BusinessStore = require('../stores/business');
var ClientActions = require('../actions/ClientActions');
var TagForm = require('./TagForm');

var BusinessForm = React.createClass({
	getInitialState: function () {
		return ({
			name: "", address: "Diagon Alley", 
			hours: "", price: "", tagIds: []});
	},

	handleName: function (event) {
		this.setState({name: event.target.value});
	},

	handleAddress: function (event) {
		console.log(event.target.value);
		this.setState({address: event.target.value});
	},

	handleHours: function (event) {
		this.setState({hours: event.target.value});
	},

	handlePrice: function (event) {
		this.setState({price: parseInt(event.target.value)});
	},

	handleTags: function (event) {
		var tagIds = this.state.tagIds;
		var tagId = parseInt(event.target.value);
		var index = tagIds.indexOf(tagId);
		if (index === -1) {
			tagIds.push(tagId);
		} else {
			tagIds.splice(index, 1);
		}
		this.setState({tagIds: tagIds});
	},

	handleSubmit: function (event) {
		event.preventDefault();
		var business = 
		{user_id: this.state.user_id,
		 name: this.state.name, 
		 address: this.state.address, 
		 hours: this.state.hours, 
		 price: this.state.price,
		 tag_ids: this.state.tagIds};

		ClientActions.createBusiness(business);
	},

	hoodsForm: function () {
		var hoods = ['Diagon Alley', 'Carkitt', 'Knockturn Alley', 'Hogsmeade', 'Horizont Alley'];
		var self = this;
		var hoodOptions= hoods.map(function (hood) {
			return <option value={hood}>{hood}</option>;
		});
		return (<select onChange={self.handleAddress} >{hoodOptions}</select>);
	},

	priceForm: function () {

		return (
			<div className="price-form">
				<label for="price=1">$</label>				
				<input 
					type="radio" 
					onChange={this.handlePrice} 
					value={1} 
					name="price" 
					id="price=1"
				/>

				<label for="price-2">$$</label>
				<input 
					type="radio" 
					onChange={this.handlePrice} 
					value={2} 
					name="price" 
					id="price-2" 
				/>


				<label for="price-3">$$$</label>
				<input 
					type="radio" 
					onChange={this.handlePrice} 
					value={3} 
					name="price" 
					id="price-3"
				/>
			</div>
		);
	},

	render: function () {

		return(
			<form className="business-form" onSubmit={this.handleSubmit}>
				<div className="business-and-tag-form">
					<div className="business-form-details">
						<label for="business-name">Business Name</label>
						<input 
							type="text" 
							onChange={this.handleName} 
							value={this.state.name} 
							id="business-name"
						/>
						<label for="address">Neighborhood</label>
							{this.hoodsForm()}
						
						<label for="hours">Hours</label>
						<input 
							type="text" 
							onChange={this.handleHours} 
							value={this.state.hours} 
							id="hours"
						/>

						{this.priceForm()}
					</div>
				<TagForm handleTags={this.handleTags}/>
				</div>
				
				<div className="button-wrapper">
					<button onClick={this.handleSubmit}>Add Business</button>
				</div>

			</form>


			);
	}

});

module.exports = BusinessForm;

// User HP currency as price ratings, spin coin on hover

// <label for="address">Address</label>
// 				<input 
// 					type="text" 
// 					onChange={this.handleAddress} 
// 					value={this.state.address} 
// 					id="address"
// 				/>