var React = require('react');
var BusinessStore = require('../stores/business');
var UserStore = require('../stores/user');
var ClientActions = require('../actions/ClientActions');
var BusinessIndexItem = require('./BusinessIndexItem');
var BusinessForm = require('./BusinessForm');
var LoginForm = require('./LoginForm');
var Modal = require('react-modal');

var BusinessIndex = React.createClass({
	getInitialState: function () {
		return ( {businesses: [], modalIsOpen: false} );
	},

	componentDidMount: function () {
		this.businessListener = BusinessStore.addListener(this._onChange);
		this.userListener = UserStore.addListener(this._onChange);
		ClientActions.fetchBusinesses();
		Modal.setAppElement(document.body);
	},

	_onChange: function () {
		this.setState({businesses: BusinessStore.all()});
		this.closeModal();
		//TODO: Should I close modal on business store update? what if I have multiple users? 
	},

	openModal: function () {
		this.setState({modalIsOpen: true});
	},

	closeModal: function () {
		this.setState({modalIsOpen: false});
	},

 	form: function () {
 		if (UserStore.currentUser()) {
 			console.log('here is the business form');
 			return (<BusinessForm />);
 		} else {
 			console.log('sorry please log in to see the business form');
 				return (<LoginForm formType="Log In"/>);
 			}
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
		// Build a button that will render the create new Business form
		return (
			<div className="businesses">
				<button 
					className="new-business" 
					onClick={this.openModal}>
					New Business
				</button>
				<div className="business-index">
					{businesses}
				</div>

				<Modal
					isOpen={this.state.modalIsOpen} 
					onRequestClose={this.closeModal}>
					{this.form()}
				</Modal>
			</div>
		);
	}
});

module.exports = BusinessIndex;