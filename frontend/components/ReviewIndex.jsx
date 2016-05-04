var React = require('react');
var BusinessStore = require('../stores/business');
var ReviewForm = require('./ReviewForm');
var ReviewIndexItem = require('./ReviewIndexItem');

var ReviewIndex = React.createClass({
	render: function () {
		
		var reviews = this.props.reviews.map(function(review) {
			return <ReviewIndexItem key={review.id} review={review}/>;
		});
		return (
			<div className="reviews">
				<ReviewForm 
					businessId={this.props.businessId}
					/>
				{reviews}
			</div>

		);
	}

});

module.exports = ReviewIndex;