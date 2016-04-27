var React = require('react');
var UserActions = require('../actions/UserActions');
var CurrentUserState = require('../mixins/CurrentUserState');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var LoginForm = React.createClass({
	mixins: [LinkedStateMixin, CurrentUserState],

	getInitialState: function () {
		return {form: "sign-in"};
	},

	handleSubmit: function (event) {
		event.preventDefault();
		var potentialUser = {user_name: this.state.username, password: this.state.password};
		UserActions.create({user_name: this.state.username, password: this.state.password});
	},

	render: function () {
		return (
			<div id="login-form">

				<form onSubmit={this.handleSubmit} >
				
					<section>
						<h2>Sign In</h2>
						<label>Username <br/>
							<input type="text" valueLink={this.linkState("username")} />
						</label>

						<br/>
						<br/>

						<label>Password <br/>
							<input type="password" valueLink={this.linkState("password")} />
						</label>

					</section>

					<section>
						<input type="submit" value="Submit" />
					</section>

				</form>		
			</div>
		);
	}
});

module.exports = LoginForm;
