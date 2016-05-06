var React = require('react');
var UserStore = require('../stores/user');
var BusinessStore = require('../stores/business');
var ClientActions = require('../actions/ClientActions');

var BusinessForm = React.createClass({
	getInitialState: function () {
		return ({
			name: "", address: "", 
			hours: "", price: ""});
	},

	handleName: function (event) {
		this.setState({name: event.target.value});
	},

	handleAddress: function (event) {
		this.setState({address: event.target.value});
	},

	handleHours: function (event) {
		this.setState({hours: event.target.value});
	},

	handlePrice: function (event) {
		this.setState({price: parseInt(event.target.value)});
	},

	handleSubmit: function (event) {
		event.preventDefault();
		var business = 
		{user_id: this.state.user_id,
		 name: this.state.name, 
		 address: this.state.address, 
		 hours: this.state.hours, 
		 price: this.state.price};

		ClientActions.createBusiness(business);
	},

	priceForm: function () {

	},

	render: function () {
		return(
			<form onSubmit={this.handleSubmit}>
			
				<label for="business-name">Business Name</label>
				<input 
					type="text" 
					onChange={this.handleName} 
					value={this.state.name} 
					id="business-name"
				/>

				<label for="hours">Address</label>
				<input 
					type="text" 
					onChange={this.handleAddress} 
					value={this.state.address} 
					id="address"
				/>
				
				<label for="hours">Hours</label>
				<input 
					type="text" 
					onChange={this.handleHours} 
					value={this.state.hours} 
					id="hours"
				/>

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
				
				<div className="button-wrapper">
					<button onClick={this.handleSubmit}>Add Business</button>
				</div>

			</form>


			);
	}

});

module.exports = BusinessForm;

// User HP currency as price ratings, spin coin on hover