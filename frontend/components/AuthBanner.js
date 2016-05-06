var React = require('react');
var BusinessStore = require('../stores/business');
var UserStore = require('../stores/user');

var AuthError = React.createClass({
	getInitialState: function () {
		return ({errors: []});
	},

	componentDidMount: function () {
		this.userListener = UserStore.addListener(this._onChange);
	},

	componentWillUnmount: function () {
		this.userListener.remove();
	},

	_onChange: function () {
		this.setState({errors: UserStore.errors()});
	},

	render: function() {
		var errors = this.state.errors.map(function (error) {
			return (<li className="error-item">{error}</li>);
		});
		return (
			<div className="auth-banner">
				{errors}
			</div>
		);
	}

});

module.exports = AuthError;