var React = require('react');

var PhotoIndexItem = React.createClass({
	render: function() {
	var photo = this.props.photo;
		return (
			<div className="photo-index-item">
				<img  src={photo.url} />
			</div>
		);
	}

});

module.exports = PhotoIndexItem;