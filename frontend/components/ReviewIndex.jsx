var React = require('react');
var BusinessStore = require('../stores/business');
var ReviewForm = require('../components/ReviewForm');

var ReviewIndex = React.createClass({
	getInitialState: function () {
		return {modalIsOpen: false};
	},

	openModal: function () {
		this.setState({modalIsOpen: true});
	},

	render: function () {
		
		var reviews = this.props.reviews.map(function(review) {
			return <li key={review.id}>{review.body}</li>;
		});
		return (
			<div className="reviews">
				<ReviewForm 
					businessId={this.props.businessId}
					openModal={this.props.openModal}
					closeModal={this.props.closeModal}
					/>
				{reviews}
			</div>

		);
	}

});

module.exports = ReviewIndex;