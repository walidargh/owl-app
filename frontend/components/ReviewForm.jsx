var React = require('react');
var ClientActions = require('../actions/ClientActions');
var UserStore = require('../stores/user');
var BusinessStore = require('../stores/business');
var Modal = require('react-modal');
var LoginForm = require('./LoginForm');
var StarRating = require('react-star-rating');
var RatingForm = require('./RatingForm');


var customStyles = {
	overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0, 0, 0, 0.75)',
    zIndex 					  : 1000
  },
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
			body: "", rating: 0, formIsOpen: false, modalIsOpen: false, buttonIsShown: true, buttonClicked: false
		});
	},

	componentWillMount: function () {
		this.userListener = UserStore.addListener(this._onUserChange);
		this.businessListener = BusinessStore.addListener(this._onBusinessChange);
	},

	componentWillUnmount: function () {
		this.userListener.remove();
		this.businessListener.remove();
	},

	_onUserChange: function () {
		if (UserStore.errors().length === 0) {
      this.closeModal();
    } 
    if (UserStore.currentUser() && this.state.buttonClicked) {
    	this.openForm();
    } else {
    	this.closeForm();
    }
  },

  _onBusinessChange: function () {
    if (BusinessStore.errors().length === 0) {
			this.closeForm();
		}
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
		this.setState({formIsOpen: true, buttonClicked: false});
	},

	closeForm: function (callback) {
		this.showButton();
		this.setState({formIsOpen: false, body: ""}, callback);
	},

	handleBody: function (event) {
		this.setState({body: event.target.value});
	},

	handleRating: function (value) {
		this.setState({rating: value});
	},

	handleSubmit: function (event) {
		event.preventDefault();
		var review = {body: this.state.body, 
									rating: this.state.rating, 
									business_id: this.props.businessId};
		ClientActions.createReview(review);
	},

// 	ratingForm: function (event) {
// 		// this.setState({rating: parseInt(event.target.innerHTML)});
// 		// this.setState({rating: event.target.value});
// return (
//         <form action="/api" method="POST">
//           <StarRating name="airbnb-rating" caption="Rate your stay!" ratingAmount={5} />
//           <button type="submit" className="btn btn-submit">Submit Rating</button>
//         </form>
// 			);
// 	},


	reviewButton: function () {
		if (this.state.buttonIsShown) {
			return (
				<div className="button-wrapper">
					<button className="review-button" onClick={this.identifyForm}>
						Write A Review
					</button>
				</div>
				);
		}
	},

	ratingForm: function () {
		if (this.state.formIsOpen) {
			var self = this;
			return <RatingForm handleRating={self.handleRating} />;
		}
	},

	reviewForm: function () {
		if (this.state.formIsOpen) {
			return (
				<form className="review-form" onSubmit={this.handleSubmit}>
					<label>Write a Review for {this.props.businessName}</label>
					{this.ratingForm()}
					<textarea
						className="review-form-body"
						placeholder="Tell us about your experience here!"
						row={10}
						column={20} 
						onChange={this.handleBody} 
						value={this.state.body} 
					/>
					<div className="button-wrapper">
						<button className="submit-review" onClick={this.handleSubmit}>Submit</button>
					</div>

				</form>
			);
		} 
	},

	identifyForm: function () {
		this.setState({buttonClicked: true});
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