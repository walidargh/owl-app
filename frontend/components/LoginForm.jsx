var React = require('react');
var UserActions = require('../actions/UserActions');
var CurrentUserState = require('../mixins/CurrentUserState');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var UserStore = require('../stores/user');

var LoginForm = React.createClass({
	mixins: [LinkedStateMixin, CurrentUserState],

	getInitialState: function () {
		console.log(this.props);
		return {user_name: "", password: ""};
	},

	handleSubmit: function (event) {
		event.preventDefault();
		var potentialUser = {
			user_name: this.state.username, password: this.state.password
		};
		UserActions.create({
			user_name: this.state.username, password: this.state.password
		});
	},

	handleUsername: function (event) {
		this.setState({username: event.target.value});
	},

	handlePassword: function (event) {
		this.setState({password: event.target.value});
	},

	logout: function () {

	},

	login: function () {

	},

	errors: function () {

	},

	form: function () {
		if(this.state.CurrentUser) {
			return;
		}
		return (
			<form onSubmit={this.handleSubmit} >
				<h2>{this.props.formType}</h2>
				<section>
					<label>Username<br/>
						<input type="text" 
							onChange={this.handleUsername} 
							value={this.state.username || ""} 
						/>
					</label>

					<br/><br/>

					<label>Password<br/>
						<input type="password" 
							onChange={this.handlePassword} 
							value={this.state.password} 
						/>
					</label>
				</section>

				<section>
					<input type="submit" value="Submit" />
				</section>
			</form>
		);
	},

	render: function () {
		return (
			<div id="log-form">
				{this.form()}
			</div>
		);
	}
});

module.exports = LoginForm;
