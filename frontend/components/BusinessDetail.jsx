var React = require('react');
var BusinessStore = require('../stores/business');
var ClientActions = require('../actions/ClientActions');



var BusinessDetail = React.createClass({
	getInitialState: function () {
		return {business: this.getStatefromStore()};
	},

	getStatefromStore: function () {
		var businessId = parseInt(this.props.params.id);
		return {business: this.BusinessStore.find(businessId)};
	},

	componentWillReceiveProps: function (newProps) {

	},	

	componentDidMount: function () {
		f
		BusinessStore.addListener(this._onChange);
	},

	_onChange: function () {

	},

	render: function () {
		return (<div>Hello</div>)
	}
});

module.exports = BusinessDetail;