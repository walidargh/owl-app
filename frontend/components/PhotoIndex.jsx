var React = require('react');
var BusinessStore = require('../stores/business');
var ClientActions = require('../actions/ClientActions');
var PhotoIndex = React.createClass({
	getInitialState: function () {
		return ({photos: [], modalIsOpen: false});
	},

	// componentWillMount: function () {
	// 	this.businessListener.BusinessStore.addListener(this._onChange);
	// 	ClientActions.fetchPhotos();
	// },

	// _onChange: function () {
	// 	var businesses = BusinessStore.all();
	// },
	uploadPhoto: function (event) {
		event.preventDefault();
		var self = this;
		cloudinary.openUploadWidget(
			window.CLOUDINARY_OPTIONS, 
			function (error, photos ) {
				if (error === null) {
					var photo = {url: photos[0].url, business_id: self.props.businessId};
					ClientActions.uploadPhoto(photo);
				}
			});
	},

	render: function() {
		var photos = this.state.photos.map(function (photo) {
			return <img src={photo.url} />;
		});
		return (
			<div className="photo-index">
				{photos}
				<button onClick={this.uploadPhoto}>Upload Image</button>
			</div>
		);
	}

});

module.exports = PhotoIndex;