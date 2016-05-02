var React = require('react');
var BusinessStore = require('../stores/business');
var ClientActions = require('../actions/ClientActions');
var ReviewIndex = require('./ReviewIndex');
var PhotoIndex = require('./PhotoIndex');


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

					<span className="business-index-title">
						{this.state.business.name}
					</span><br/>

					<span className="business-index-address">
						{this.state.business.address}
					</span><br/>

					<span className="business-index-hours">
						{this.state.business.hours}
					</span><br/>

					<span className="business-index-price">
						{this.state.business.price}
					</span><br/>

				</section>

				<section className="reviews-container">
					{this.reviewForm()}
				</section> 

				<PhotoIndex businessId={this.state.business.id}/>
			</div>
		);
	}
});

module.exports = BusinessDetail;