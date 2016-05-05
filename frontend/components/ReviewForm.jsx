var React = require('react');
var ClientActions = require('../actions/ClientActions');
var UserStore = require('../stores/user');
var BusinessStore = require('../stores/business');
var Modal = require('react-modal');
var LoginForm = require('./LoginForm');



var customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    borderRadius          : '10px',
    transform             : 'translate(-50%, -50%)'
  }
};

var ReviewForm = React.createClass({
	getInitialState: function () {
		return ({
			body: "", rating: 2, formIsOpen: false, modalIsOpen: false, buttonIsShown: true
		});
	},

	componentWillMount: function () {
		this.userListener = UserStore.addListener(this._onChange);
		this.businessListener = BusinessStore.addListener(this._onChange);
	},

	componentWillUnmount: function () {
		this.userListener.remove();
		this.businessListener.remove();
	},

	_onChange: function () {
		this.closeModal();
		this.closeForm();
	},

	showButton: function () {
		this.setState({buttonIsShown: true});
	},

	hideButton: function () {
		this.setState({buttonIsShown: false});
	},

	openModal: function () {
		this.setState({modalIsOpen: true});
	},

	closeModal: function () {
		this.setState({modalIsOpen: false});
	},

	openForm: function () {
		this.hideButton();
		this.setState({formIsOpen: true});
	},

	closeForm: function (callback) {
		this.showButton();
		this.setState({formIsOpen: false, body: ""}, callback);
	},

	handleBody: function (event) {
		this.setState({body: event.target.value});
	},

	handleRating: function (event) {
		this.setState({rating: event.target.value});
	},

	handleSubmit: function (event) {
		event.preventDefault();
		var review = {body: this.state.body, 
									rating: this.state.rating, 
									business_id: this.props.businessId};
		ClientActions.createReview(review);
	},

	// ratingForm: function (event) {
	// 	// this.setState({rating: parseInt(event.target.innerHTML)});
	// 	// this.setState({rating: event.target.value});
	// 	debugger
	// 	return <ReactStar.Klass stars={5} onChange={this.handleRating} value={this.state.rating}/>;
	// },

	reviewButton: function () {
		if (this.state.buttonIsShown) {
			return (
				<button className="review-button" onClick={this.identifyForm}>
					Write A Review
				</button>
				);
		}
	},

	reviewForm: function () {
		if (this.state.formIsOpen) {
			return (
				<form className="review-form" onSubmit={this.handleSubmit}>
					<label>Write a Review for {this.props.businessName}</label>
					<textarea
						className="review-form-body"
						row={5}
						column={20} 
						onChange={this.handleBody} 
						value={this.state.body} 
					/>
				<input type="submit" value="Submit" onClick={this.handleSubmit}/>
			</form>
			);
		} 
	},

	identifyForm: function () {
		if (UserStore.currentUser()) {
			this.openForm();
		} else {
			this.openModal();
		}
	},

	render: function () {
		return (
			<div className="review-form-and-button">
				{this.reviewButton()}
				{this.reviewForm()}
				<Modal
					isOpen={this.state.modalIsOpen}
					onRequestClose={this.closeModal}
					style={customStyles}>
					<LoginForm formType="Log In"/>
				</Modal>
			</div>
		);
	}
});

module.exports = ReviewForm;

				// {this.ratingForm()}

		// <span className="starRating" onClick={this.starRating}>
		//   <input id="rating5" type="radio" className="rating" value="5" />
		//   <label htmlFor="rating5">5</label>
		//   <input id="rating4" type="radio" className="rating" value="4" />
		//   <label htmlFor="rating4">4</label>
		//   <input id="rating3" type="radio" className="rating" value="3" />
		//   <label htmlFor="rating3">3</label>
		//   <input id="rating2" type="radio" className="rating" value="2" />
		//   <label htmlFor="rating2">2</label>
		//   <input id="rating1" type="radio" className="rating" value="1" />
		//   <label htmlFor="rating1">1</label>
		// </span>