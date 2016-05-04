var React = require('react');
var BusinessStore = require('../stores/business');
var ReviewForm = require('../components/ReviewForm');

var ReviewIndexItem = React.createClass({

	render: function() {
		var review = this.props.review;
		return (
			<div className="review-index-item">
				<li className="review-username">{review.username}</li>
				<li className="review-body">{review.body}</li>
			</div>
		);
	}

});

module.exports = ReviewIndexItem;