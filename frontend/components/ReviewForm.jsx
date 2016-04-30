var React = require('react');
var ClientActions = require('../actions/ClientActions');

var ReviewForm = React.createClass({
	getInitialState: function () {
		return {body: "", rating: 5};
	},

	handleChange: function (event) {
		this.setState({body: event.target.value});
	},

	handleSubmit: function () {
		var review = {body: this.state.body, rating: this.state.rating, business_id: this.props.businessId};
		ClientActions.createReview(review);
	},

	render: function () {
		return (
			<form className="review-form" onSubmit={this.handleSubmit}>
				<input type="textbox" onChange={this.handleChange} value={this.state.body} />
			</form>
		);
	}
});

module.exports = ReviewForm;