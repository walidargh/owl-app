var React = require('react');

var PhotoIndexItem = React.createClass({
	render: function() {
	var photo = this.props.photo;
		return (
			<img src={photo.url} />
		);
	}

});

module.exports = PhotoIndexItem;