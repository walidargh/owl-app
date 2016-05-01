var React = require('react');
var BusinessStore = require('../stores/business');
var FormConstants = require('../constants/FormConstants');
var FormModal = require('../modals/FormModal');

var ReviewIndex = React.createClass({
	getInitialState: function () {
		return {modalIsOpen: false};
	},

	// componentWillMount: function () {
	// },

	render: function () {
		var reviews = this.props.reviews.map(function(review) {
			return <li>{review.body}</li>;
		});
		return (
			<div>
				<FormModal  
					businessId={this.props.businessId}
					modalFormType={FormConstants.REVIEWFORM}
					modalIsOpen={this.state.modalIsOpen}
				/>
				{reviews}
			</div>

		);
	}

});

module.exports = ReviewIndex;
