var React = require('react');
var UserStore = require('../stores/user');
var BusinessStore = require('../stores/business');
var ClientActions = require('../actions/ClientActions');

var BusinessForm = React.createClass({
	getInitialState: function () {
		// var currentUser = UserStore.currentUser();
		return ({
			name: "", address: "", 
			hours: "", price: "$"});
	},

	componentDidMount: function () {
		// UserStore.addListener(this._onChange);
	},

	_onChange: function () {
		// var currentUser = UserStore.currentUser();
		// this.setState({user_id: currentUser.id});
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

	render: function () {
		console.log("About to render the business form in BusinessForm.jsx");
		return(
			<div>
				<label>Business Name
					<input type="text" onChange={this.handleName} value={this.state.name}/>
				</label>

				<label>Address
					<input type="text" onChange={this.handleAddress} value={this.state.address}/>
				</label>

				<label>Hours
					<input type="text" onChange={this.handleHours} value={this.state.hours}/>
				</label>

				<button onClick={this.handleSubmit}>Add Business</button>
			</div>


			);
	}

});

module.exports = BusinessForm;