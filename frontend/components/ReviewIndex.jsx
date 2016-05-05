var React = require('react');
var BusinessStore = require('../stores/business');
var ReviewForm = require('./ReviewForm');
var ReviewIndexItem = require('./ReviewIndexItem');

var ReviewIndex = React.createClass({
	render: function () {
		if (this.props.reviews) {
			var reviews = this.props.reviews.map(function(review) {
				return <ReviewIndexItem key={review.id} review={review}/>;
			});
		}
		return (
			<div className="reviews">
				<ReviewForm 
					businessId={this.props.businessId}
					businessName={this.props.businessName}
					/>
				<div className="review-index">
					{reviews}
				</div>
			</div>

		);
	}

});

module.exports = ReviewIndex;