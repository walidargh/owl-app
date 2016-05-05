var React = require('react');
var BusinessStore = require('../stores/business');
var UserStore = require('../stores/user');
var ReviewForm = require('../components/ReviewForm');

var ReviewIndexItem = React.createClass({

	render: function() {
		var review = this.props.review;
		var username = review.username ? review.username : UserStore.currentUser().user_name;
		return (
			<div className="review-index-item">
				<li className="review-username"><strong>{username}</strong></li>
				<li className="review-body">{review.body}</li>
			</div>
		);
	}

});

module.exports = ReviewIndexItem;