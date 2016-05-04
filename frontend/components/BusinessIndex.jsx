var React = require('react');
var BusinessStore = require('../stores/business');
var UserStore = require('../stores/user');
var ClientActions = require('../actions/ClientActions');
var BusinessIndexItem = require('./BusinessIndexItem');
var Modal = require('react-modal');
var LoginForm = require('./LoginForm');
var BusinessForm = require('./BusinessForm');


var BusinessIndex = React.createClass({
	getInitialState: function () {
		return ( {businesses: [], modalIsOpen: false} );
	},

	componentWillMount: function () {
		this.businessListener = BusinessStore.addListener(this._onChange);
		this.userListener = UserStore.addListener(this._onChange);
		var businesses = BusinessStore.all();
		this.setState({businesses: businesses});
	},

	componentWillUnmount: function () {
		this.businessListener.remove();
		this.userListener.remove();
	},

	_onChange: function () {
		var businesses = BusinessStore.all();
		this.setState({businesses: businesses});
		this.closeModal();
	},

	openModal: function () {
		this.setState({modalIsOpen: true});
	},

	closeModal: function () {
		this.setState({modalIsOpen: false});
	},

	handleClick: function (event) {
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

		var form = UserStore.currentUser() ? <BusinessForm /> : <LoginForm formType="Log In"/>;
		return (
			<div className="businesses">

				<button 
					className="new-business" 
					onClick={this.handleClick}>
					New Business
				</button>

				<Modal
					isOpen={this.state.modalIsOpen}
					onRequestClose={this.closeModal}>
					{form}
				</Modal>

				<div className="business-index">
					{businesses}
				</div>

			</div>
		);
	}
});

module.exports = BusinessIndex;