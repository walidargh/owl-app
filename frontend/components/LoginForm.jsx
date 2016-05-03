
var React = require('react');
var UserActions = require('../actions/UserActions');
var UserStore = require('../stores/user');

var LoginForm = React.createClass({
	getInitialState: function () {
		return {user_name: "", password: ""};
	},

	handleSubmit: function (event) {
		event.preventDefault();
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

	form: function () {
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

					<label>Password<br/>
						<input type="password"
							onChange={this.handlePassword}
							value={this.state.password || ""}
						/>
					</label>
				</section>

				<button>{this.props.formType}</button>

			</form>
		);
	},

	render: function () {
		debugger
		return (
			<div className="log-form">
				{this.form()}
			</div>
		);
	}
});

module.exports = LoginForm;
