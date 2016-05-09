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
		var errors = this.state.errors.map(function (error) {
			return (<li className="business-error-item">{error}</li>);
		});

		if (!this.state.errors.length) {
			$('business-error-banner').hide();
		} else {
				$('business-error-banner').hide();	
			}
		return (
			<div className="business-error-banner">
				{errors}
			</div>
		);
	}

});

module.exports = BusinessError;