var React = require('react');
var BusinessStore = require('../stores/business');
var ClientActions = require('../actions/ClientActions');
var BusinessIndexItem = require('./BusinessIndexItem');

var BusinessIndex = React.createClass({
	getInitialState: function () {
		return ( {businesses: [], isModalOpen: false} );
	},

	componentDidMount: function () {
		BusinessStore.addListener(this._onChange);
		ClientActions.fetchBusinesses();
	},

	_onChange: function () {
		this.setState({businesses: BusinessStore.all()});
	},

	openModal: function () {
		this.setState({isModalOpen: true});
	},
 	// loggedIn: function () {
 	// 	if (BusinessStore.currentUser) {
 	// 		return <>
 	// 	}
 	// }
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
				<div>
					<button onClick={this.openModal}>New Business</button>
					{businesses}
				</div>
			);
	}
});

module.exports = BusinessIndex;