var React = require('react');
var BusinessStore = require('../stores/business');
var ClientActions = require('../actions/ClientActions');
var ReviewIndex = require('./ReviewIndex');
var PhotoIndex = require('./PhotoIndex');
var FormConstants = require('../constants/FormConstants');
var FormModal = require('../modals/FormModal');

var BusinessDetail = React.createClass({

	getInitialState: function () {
		return {business: "", modalIsOpen: false};
	},

	openModal: function () {
		this.setState({modalIsOpen: true});
	},

	closeModal: function () {
		this.setState({modalIsOpen: false});
	},


	getStatefromStore: function () {
		var business = BusinessStore.currentBusiness();
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
			debugger
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

	render: function () {
		debugger
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

				<PhotoIndex 
					businessId={this.state.business.id}
					openModal={this.openModal}
					closeModal={this.closeModal}
				/>

				<FormModal 
					modalFormType={FormConstants.LOGINFORM} 
					modalIsOpen={this.state.modalIsOpen}
					formType={"Log In"}
				/>
			</div>
		);
	}
});

module.exports = BusinessDetail;