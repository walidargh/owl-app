var React = require('react');
var ClientActions = require('../actions/ClientActions');
var UserStore = require('../stores/user');
var FormConstants = require('../constants/FormConstants');
var FormModal = require('../modals/FormModal');


var PhotoForm = React.createClass({
	getInitialState: function () {
		return ({modalIsOpen: false});
	},

	uploadPhoto: function (event) {
		debugger
		event.preventDefault();
		var self = this;
		if (UserStore.currentUser()) {
			cloudinary.openUploadWidget(
				window.CLOUDINARY_OPTIONS, 
				function (error, photos ) {
					if (error === null) {
						var photo = {url: photos[0].url, business_id: self.props.businessId};
						ClientActions.uploadPhoto(photo);
						self.props.closeModal();
					}
				});
		} else {
			debugger
			self.props.openModal();
			}
	}, 

	render: function() {
		return (
			<div>
				<button onClick={this.uploadPhoto}>Upload Photo</button>
			</div>
		);
	}

});

module.exports = PhotoForm;
