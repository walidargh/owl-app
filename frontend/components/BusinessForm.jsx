var React = require('react');
var UserStore = require('../stores/business');
var ClientActions = require('../actions/ClientActions');

var BusinessForm = React.createClass({
	getInitialState: function () {
		var currentUser = UserStore.currentUser();
		return ({
			user_id: currentUser.id, 
			name: "", address: "", 
			hours: "", price: ""});
	},

	componentDidMount: function () {
		UserStore.addListener(this._onChange);
	},

	_onChange: function () {
		var currentUser = UserStore.currentUser();
		this.setState({user_id: currentUser.id});
	},

	handleSubmit: function () {
		var business = 
		{user_id: this.state.user_id,
		 name: this.state.name, 
		 address: this.state.address, 
		 hours: this.state.hours, 
		 price: this.state.price};

		ClientActions.createBusiness(business);
	},

	render: function () {
		return(
			<div>
				<label>Business Name
					<input type="text" value={this.state.name}/>
				</label>

				<label>Address
					<input type="text" value={this.state.address}/>
				</label>

				<label>Hours
					<input type="text" value={this.state.hours}/>
				</label>

				<button onClick={this.handleSubmit}>Add Business</button>
			</div>


			);
	}

});