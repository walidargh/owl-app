var React = require('react');
var BusinessStore = require('../stores/business');
var ClientActions = require('../actions/ClientActions');
var ReviewIndex = require('./ReviewIndex');
var PhotoIndex = require('./PhotoIndex');

var BusinessDetail = React.createClass({

	getInitialState: function () {
		return {business: "", modalIsOpen: false};
	},

	getStatefromStore: function () {
		var business = BusinessStore.find(this.props.routeParams.businessId);
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
					openModal={this.openModal}
					closeModal={this.closeModal}
				/>
			);
		}
	},

	photoForm: function () {
		if (this.state.business !== "") {
				return (
					<PhotoIndex 
						photos={this.state.business.photos}
						businessId={this.state.businessId}
					/>
				);
		} else {
				return <div></div>;
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

				{this.reviewForm()}

				{this.photoForm()}


			</div>
		);
	}
});

module.exports = BusinessDetail;