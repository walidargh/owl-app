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
		//TODO build component to handle rendering 
		// ClientActions.fetchBusinesses();
		var businesses = BusinessStore.all();
		this.setState({businesses: businesses});
	},

	_onChange: function () {
		// var businesses;
		// if (BusinessStore.matches() === {}) {
		// 	businesses = BusinessStore.all();
		// } else {
		// 		businesses = BusinessStore.matches();
		// 	}
		var businesses = BusinessStore.all();
		this.setState({businesses: businesses});
	},

	componentWillUnmount: function () {
		this.businessListener.remove();
	},

	openModal: function () {
		this.setState({modalIsOpen: true});
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
					onClick={this.openModal}>
					New Business
				</button>

				<div className="business-index">
					{businesses}
				</div>

				<FormModal 
					modalFormType={FormConstants.BUSINESSFORM} 
					modalIsOpen={this.state.modalIsOpen} 
				/>
			</div>
		);
	}
});

module.exports = BusinessIndex;