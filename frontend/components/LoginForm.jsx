
var React = require('react');
var UserActions = require('../actions/UserActions');
var UserStore = require('../stores/user');
var AuthError = require('./AuthError');

var LoginForm = React.createClass({
	getInitialState: function () {
		return {username: "", password: ""};
	},

	handleSubmit: function (event) {
		if (event) {
			event.preventDefault();
		}

		var potentialUser = {
			user_name: this.state.username, password: this.state.password
		};
		if (this.props.formType === "Sign Up") {
			UserActions.create(potentialUser);
		} else {
				UserActions.login(potentialUser);
			}
	},

	handleUsername: function (event) {
		this.setState({username: event.target.value});
	},

	handlePassword: function (event) {
		this.setState({password: event.target.value});
	},

	demoUser: function (event) {
		event.preventDefault();
		var username='padfoot';
		var password='sirius';
		this.setState({username: username, password: password});
		var guestUser = 
			{user_name: username, password: password};
		UserActions.login(guestUser);

	},

	form: function () {
		return (
			<form>
				<div className="log-title">{this.props.formType}</div>
				<AuthError />
				<section>
						<input type="text"
							placeholder="Username"
							onChange={this.handleUsername}
							value={this.state.username}
						/>
					<br/>
						<input type="password"
						placeholder="Password"
							onChange={this.handlePassword}
							value={this.state.password}
						/>
				</section>
				
				<div className="log-buttons">
					<div className="button-wrapper">
						<button onClick={this.handleSubmit}>{this.props.formType}</button>
					</div>

					<div className="button-wrapper">
						<button onClick={this.demoUser}>Guest Login</button>
					</div>
				</div>

			</form>
		);
	},

	render: function () {
		return (
			<div className="log-form">
				{this.form()}
			</div>
		);
	}
});

module.exports = LoginForm;
