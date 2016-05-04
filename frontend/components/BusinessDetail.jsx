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
				/>
			);
		}
	},

	photoForm: function () {
		if (this.state.business !== "") {
				return (
					<PhotoIndex 
						photos={this.state.business.photos}
						businessId={this.state.business.id}
					/>
				);
		} else {
				return <div></div>;
			}
	},

	render: function () {

		return (
			<div className="business-detail">
				<ul className='business-detail-feature-bar'>

					<li className="business-index-title">
						{this.state.business.name}
					</li>

					<li className="business-index-address">
						{this.state.business.address}
					</li>

					<li className="business-index-hours">
						{this.state.business.hours}
					</li>

					<li className="business-index-price">
						{this.state.business.price}
					</li>

				</ul>

				{this.photoForm()}

				{this.reviewForm()}

			</div>
		);
	}
});

module.exports = BusinessDetail;