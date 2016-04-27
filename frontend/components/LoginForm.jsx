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

	// handleSubmit: function (event) {
	// 	event.preventDefault();	
	// 	console.log(this.state);
	// 	user = {this.state.username}
	// },

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
						<button value="Sign In" />
					</section>

				</form>		
			</div>
		);
	}
});

module.exports = LoginForm;
