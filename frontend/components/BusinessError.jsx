var React = require('react');
var BusinessStore = require('../stores/business');

var BusinessError = React.createClass({

	getInitialState: function () {
		return ({errors: []});
	},

	componentDidMount: function () {
		this.businessListener = BusinessStore.addListener(this._onChange);
	},

	componentWillUnmount: function () {
		this.businessListener.remove();
	},

	_onChange: function () {
		this.setState({errors: BusinessStore.errors()});
	},

	render: function() {
		debugger
		var errors = this.state.errors.map(function (error) {
			return (<li className="error-item">{error}</li>);
		});
		return (
			<div className="business-error-banner">
				{errors}
			</div>
		);
	}

});

module.exports = BusinessError;