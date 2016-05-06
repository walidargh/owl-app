var React = require('react');
var BusinessStore = require('../stores/business');
var UserStore = require('../stores/user');
var ReviewForm = require('../components/ReviewForm');

var ReviewIndexItem = React.createClass({

	stars: function () {
		var stars = [];
		for (var i = 0; i < this.props.review.rating; i++) {
			stars.push(<i className="fa fa-star" aria-hidden="true"></i>);
		}

		for (var i = 0; i < (5 - this.props.review.rating); i++) {
			stars.push(<i className="fa fa-star-o" aria-hidden="true"></i>);
		}
    return (<div>{stars}</div>);
	},

	render: function() {
		var review = this.props.review;
		var username = review.username ? review.username : UserStore.currentUser().user_name;
		return (
			<div className="review-index-item">
				<li className="review-username"><strong>{username}</strong></li>
				<li className="review-body">{review.body}</li>
				{this.stars()}
			</div>

		);
	}

});

module.exports = ReviewIndexItem;