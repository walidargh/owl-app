var React = require('react');
var BusinessStore = require('../stores/business');
var ClientActions = require('../actions/ClientActions');



var BusinessDetail = React.createClass({

	getInitialState: function () {
		console.log('initial state')
		return {business: ""};
	},

	getStatefromStore: function () {
		var businessId = parseInt(this.props.params.businessId);
		var business = BusinessStore.find(businessId);
		return {business: business};
	},

	componentWillReceiveProps: function (newProps) {
		console.log('component will receive props')
		ClientActions.fetchSingleBusiness(parseInt(newProps.params.businessId));
	},	

	componentDidMount: function () { 
		// this.setState({business: business});
		console.log('component did mount')
		ClientActions.fetchSingleBusiness(parseInt(this.props.params.businessId));
		this.businessListener = BusinessStore.addListener(this._onChange);
	},

	componentWillUnmount: function () {
		this.businessListener.remove();
	},

	_onChange: function () {
		this.setState(this.getStatefromStore);
	},

	render: function () {
		return (
			<div>
				<section className='business-detail-feature-bar'>

					<span className="business-detail-name">
						{this.state.business.name}
					</span>

					<span className="business-detail-address">
						{this.state.business.address}
					</span>

					<span className="business-detail-hours">
						{this.state.business.hours}
					</span>

					<span className="business-detail-price">
						{this.state.business.price}
					</span>

				</section>

				<section className="reviews container">

				</section> 
			</div>
		);
	}
});

module.exports = BusinessDetail;