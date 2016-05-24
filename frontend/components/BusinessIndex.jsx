var React = require('react');
var BusinessStore = require('../stores/business');
var UserStore = require('../stores/user');
var ClientActions = require('../actions/ClientActions');
var BusinessIndexItem = require('./BusinessIndexItem');
var Modal = require('react-modal');
var LoginForm = require('./LoginForm');
var BusinessForm = require('./BusinessForm');
var TagFilter = require('./TagFilter');

var customStyles = {
	overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)',
    zIndex 					  : 1000
  },

  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    borderRadius          : '10px',
    transform             : 'translate(-50%, -50%)',
  }
};

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
		debugger
		var businesses = BusinessStore.all();
		this.setState({businesses: businesses});
		if (UserStore.errors().length === 0 &&
				BusinessStore.errors().length === 0) {
      this.closeModal();
    }
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
				<TagFilter />
				<div className="button-wrapper">
					<button 
						className="new-business-button" 
						onClick={this.handleClick}>
						New Business
					</button>
				</div>

				<Modal
					isOpen={this.state.modalIsOpen}
					onRequestClose={this.closeModal}
					style={customStyles}
					>
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