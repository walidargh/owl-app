var React = require('react');
var BusinessStore = require('../stores/business');
var ReviewForm = require('./ReviewForm');

var ReviewIndex = React.createClass({
	render: function () {
		var reviews = this.props.reviews.map(function(review) {
			return <li>{review.body}</li>;
		});
		return (
			<div>
				<ReviewForm  businessId={this.props.businessId}/>
				{reviews}
			</div>

		);
	}

});

module.exports = ReviewIndex;
