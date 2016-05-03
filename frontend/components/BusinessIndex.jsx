var React = require('react');
var BusinessStore = require('../stores/business');
var UserStore = require('../stores/user');
var ClientActions = require('../actions/ClientActions');
var BusinessIndexItem = require('./BusinessIndexItem');
var FormConstants = require('../constants/FormConstants');
var FormModal = require('../modals/FormModal');
var BusinessForm = require('./BusinessForm');
var LoginForm = require('./LoginForm');
var Modal = require('react-modal');

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
		this.setState({modalIsOpen: false});
		this.setState({businesses: businesses});
	},

	componentWillUnmount: function () {
		this.businessListener.remove();
	},

	openModal: function () {
		this.setState({modalIsOpen: true});
	},

	handleClick: function (event) {
		debugger
		event.preventDefault();
		this.openModal();
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

		var form = UserStore.currentUser() ? <BusinessForm /> : <LoginForm />
		return (
			<div className="businesses">
				<Modal
					isOpen={this.state.modalIsOpen}
					onRequestClose={this.closeModal}
				> 
					{form}
				</Modal>

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