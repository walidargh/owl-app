var React = require('react');
var ClientActions = require('../actions/ClientActions');
var UserStore = require('../stores/user');
var Modal = require('react-modal');
var LoginForm = require('./LoginForm');


var PhotoForm = React.createClass({
	getInitialState: function () {
		return ({modalIsOpen: false});
	},

	componentWillMount: function () {
		this.userListener = UserStore.addListener(this._onChange);
	},

	openModal: function () {
		this.setState({modalIsOpen: true});
	},

	closeModal: function () {
		this.setState({modalIsOpen: false});
	},

	_onChange: function () {
		this.closeModal();
	},

	uploadPhoto: function (event) {
		event.preventDefault();
		var self = this;
		if (UserStore.currentUser()) {
			cloudinary.openUploadWidget(
				window.CLOUDINARY_OPTIONS, 
				function (error, photos ) {
					if (error === null) {
						var photo = {url: photos[0].url, business_id: self.props.businessId}
						ClientActions.uploadPhoto(photo);
					}
				});
		} else {
			self.openModal();
			}
	}, 

	render: function() {
		return (
			<div>
				<button onClick={this.uploadPhoto}>Upload Photo</button>
				<Modal
					isOpen={this.state.modalIsOpen}
					onRequestClose={this.closeModal}>
					<LoginForm formType="Log In"/>
				</Modal>
			</div>
		);
	}

});

module.exports = PhotoForm;
