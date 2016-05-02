var React = require('react');
var ClientActions = require('../actions/ClientActions');


var PhotoForm = React.createClass({

	form: function () {
		cloudinary.openUploadWidget(
				window.CLOUDINARY_OPTIONS, 
				function (error, photos ) {
					if (error === null) {
						var photo = {
							url: photos[0].url, 
							business_id: self.props.businessId
						};
						ClientActions.uploadPhoto(photo);
					}
				}
			);
	},

	render: function() {
		return (
			<div>
				{this.form()};
			</div>
		);
	}

});

module.exports = PhotoForm;