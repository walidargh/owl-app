var React = require('react');
var BusinessStore = require('../stores/business');
var ClientActions = require('../actions/ClientActions');
var UserStore = require('../stores/user');
var FormConstants = require('../constants/FormConstants');
var FormModal = require('../modals/FormModal');
var PhotoIndexItem = require('./PhotoIndexItem');
// var PhotoForm = require('./PhotoForm');


var PhotoIndex = React.createClass({
	getInitialState: function () {
		return ({photos: [], modalIsOpen: false});
	},

	openModal: function () {
		this.setState({modalIsOpen: true});
	},

	closeModal: function () {
		this.setState({modalIsOpen: false});
	},

	componentWillMount: function () {
		this.businessListener = BusinessStore.addListener(this._onChange);
	},

	_onChange: function () {
		var photos = BusinessStore.currentBusiness().photos;
		this.setState({photos: photos});
	},
	uploadPhoto: function (event) {
		event.preventDefault();
		var self = this;
		if (UserStore.currentUser()) {
			cloudinary.openUploadWidget(
				window.CLOUDINARY_OPTIONS, 
				function (error, photos ) {
					if (error === null) {
						var photo = {url: photos[0].url, business_id: self.props.businessId};
						ClientActions.uploadPhoto(photo);
						self.closeModal();
					}
				});
		} else {
			self.openModal();

		} 
	},
// 
	render: function() {
		var photos = this.state.photos.map(function (photo) {
			return <PhotoIndexItem photo={photo}/>;
		});
		return (
			<div className="photo-index">
				{photos}
				<button onClick={this.uploadPhoto}>Upload Image</button>
				<FormModal 
					modalFormType={FormConstants.LOGINFORM} 
					modalIsOpen={this.state.modalIsOpen}
					formType={"Log In"}
				/>
			</div>
		);
	}

});

module.exports = PhotoIndex;