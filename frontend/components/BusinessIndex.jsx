var React = require('react');
var BusinessStore = require('../stores/business');
var UserStore = require('../stores/user');
var ClientActions = require('../actions/ClientActions');
var BusinessIndexItem = require('./BusinessIndexItem');
var FormConstants = require('../constants/FormConstants');
var FormModal = require('../modals/FormModal');


var BusinessIndex = React.createClass({
	getInitialState: function () {
		return ( {businesses: [], modalIsOpen: false} );
	},

	componentWillMount: function () {
		this.businessListener = BusinessStore.addListener(this._onChange);
		var businesses = BusinessStore.all();
		this.setState({businesses: businesses});
	},

	_onChange: function () {
		var businesses = BusinessStore.all();
		this.setState({businesses: businesses});
	},

	componentWillUnmount: function () {
		this.businessListener.remove();
	},

	// openModal: function () {
	// 	this.setState({modalIsOpen: true});
	// },

	handleClick: function (event) {
		debugger
		event.preventDefault();
		this.props.setModalForm("BUSINESSFORM");
		this.props.openModal();
	},

	render: function () {
		var self = this;
		var businesses = Object.keys(this.state.businesses).map(function (id) {
			return (
				<BusinessIndexItem 
					key={id} business={self.state.businesses[id]} 
				/>
			);
		});
		return (
			<div className="businesses">

				<button 
					className="new-business" 
					onClick={this.handleClick}>
					New Business
				</button>

				<div className="business-index">
					{businesses}
				</div>

			</div>
		);
	}
});

module.exports = BusinessIndex;
				// <FormModal 
				// 	modalFormType={FormConstants.BUSINESSFORM}
				// 	formType={"Log In"} 
				// 	modalIsOpen={this.state.modalIsOpen} 
				// />