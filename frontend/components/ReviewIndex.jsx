var React = require('react');
var BusinessStore = require('../stores/business');
var FormConstants = require('../constants/FormConstants');
var FormModal = require('../modals/FormModal');

var ReviewIndex = React.createClass({
	getInitialState: function () {
		return {modalIsOpen: false};
	},

	openModal: function () {
		this.setState({modalIsOpen: true});
	},

	// componentWillMount: function () {
	// },

	render: function () {
		var reviews = this.props.reviews.map(function(review) {
			return <li key={review.id}>{review.body}</li>;
		});
		return (
			<div className="reviews">
				<button 
					className="new-review" 
					onClick={this.openModal}>
					Write A Review
				</button>

				<FormModal  
					businessId={this.props.businessId}
					modalFormType={FormConstants.REVIEWFORM}
					modalIsOpen={this.state.modalIsOpen}
				/>
				{reviews}
			</div>

		);
	}

});

module.exports = ReviewIndex;
 //TODO: may remove modal in place of a drop down input form