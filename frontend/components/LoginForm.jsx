
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

	demoUser: function () {
		var username='padfoot';
		var password='sirius';
		this.setState({username: username, password: password});
		this.handleSubmit();
		
	},

	form: function () {
		return (
			<form>
				<h2>{this.props.formType}</h2>
				<AuthError />
				<section>
					<br/>
					<label>Username<br/>
						<input type="text"
							onChange={this.handleUsername}
							value={this.state.username}
						/>
					</label>
					<br/>
					<label>Password<br/>
						<input type="password"
							onChange={this.handlePassword}
							value={this.state.password}
						/>
					</label>
				</section>
				<div className="button-wrapper">
					<button onClick={this.handleSubmit}>{this.props.formType}</button>
				</div>

				<div className="button-wrapper">
					<button onClick={this.demoUser}>Guest Login</button>
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
