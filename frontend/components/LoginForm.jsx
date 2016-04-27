var React = require('react');
var UserActions = require('../actions/UserActions');
var CurrentUserState = require('../mixins/CurrentUserState');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var UserStore = require('../stores/user');

var LoginForm = React.createClass({
	mixins: [LinkedStateMixin, CurrentUserState],

	getInitialState: function () {
		return {form: "Log In"};
	},

	handleSubmit: function (event) {
		event.preventDefault();
		var potentialUser = {user_name: this.state.username, password: this.state.password};
		UserActions.create({user_name: this.state.username, password: this.state.password});
	},

	logout: function () {

	},

	login: function () {

	},

	errors: function () {

	},

	form: function () {
		this.state.currentUser ? this.setState({form: "Sign Up"}) : this.setState({form: "Log In"})
		console.log('setting state')
		return (
			<form onSubmit={this.handleSubmit} >
				<h2>{this.state.form}</h2>
				<section>
					<label>Username <br/>
						<input type="text" valueLink={this.linkState("username")} />
					</label>

					<br/><br/>

					<label>Password <br/>
						<input type="password" valueLink={this.linkState("password")} />
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
				{this.form}
			</div>
		);
	}
});

module.exports = LoginForm;
