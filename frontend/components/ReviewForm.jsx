var React = require('react');
var ClientActions = require('../actions/ClientActions');

var ReviewForm = React.createClass({
	getInitialState: function () {
		return {body: ""};
	},

	handleChange: function () {

	},

	handleSubmit: function () {
		debugger
		var review = {body: this.state.body, rating: this.state.rating};
		ClientActions.createReview(review);
	},

	render: function () {
		return (
			<form className="review-form" onSubmit={this.handleSubmit}>
				<input type="textbox" value={this.state.body} />
			</form>
		);
	}
});

module.exports = ReviewForm;