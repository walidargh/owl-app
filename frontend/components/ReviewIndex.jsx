var React = require('react');
var BusinessStore = require('../stores/business');

var ReviewIndex = React.createClass({
	render: function () {
		debugger
		var reviews = this.props.reviews.map(function(review) {
			return <li>review.content</li>;
		});
		return (<div>{reviews}</div>);
	}

});

module.exports = ReviewIndex;
