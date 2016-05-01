var React = require('react');
var BusinessStore = require('../stores/business');
var ClientActions = require('../actions/ClientActions');
var ReviewIndex = require('./ReviewIndex');


var BusinessDetail = React.createClass({

	getInitialState: function () {
		return {business: ""};
	},

	getStatefromStore: function () {
		var businessId = parseInt(this.props.params.businessId);
		var business = BusinessStore.find(businessId);
		return {business: business};
	},

	componentWillReceiveProps: function (newProps) {
		ClientActions.fetchSingleBusiness(parseInt(newProps.params.businessId));
	},	

	componentDidMount: function () { 
		var businessId = parseInt(this.props.params.businessId);
		ClientActions.fetchSingleBusiness(businessId);
		this.businessListener = BusinessStore.addListener(this._onChange);
	},

	componentWillUnmount: function () {
		this.businessListener.remove();
	},

	_onChange: function () {
		this.setState(this.getStatefromStore());
	},

	reviewForm: function () {
		if (this.state.business === "") {
			return ;
		} else {
			return (
				<ReviewIndex 
					reviews={this.state.business.reviews} 
					businessId={this.state.business.id}
				/>
			);
		}
	},

	render: function () { 
		return (
			<div>
				<section className='business-detail-feature-bar'>

					<span className="business-detail-name">
						{this.state.business.name}
					</span><br/>

					<span className="business-detail-address">
						{this.state.business.address}
					</span><br/>

					<span className="business-detail-hours">
						{this.state.business.hours}
					</span><br/>

					<span className="business-detail-price">
						{this.state.business.price}
					</span><br/>

				</section>
					{this.reviewForm()}
				<section className="reviews container">
					
				</section> 
			</div>
		);
	}
});

module.exports = BusinessDetail;