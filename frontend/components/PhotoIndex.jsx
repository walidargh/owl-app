var React = require('react');
var BusinessStore = require('../stores/business');
var ClientActions = require('../actions/ClientActions');
var UserStore = require('../stores/user');
var PhotoIndexItem = require('./PhotoIndexItem');
var PhotoForm = require('./PhotoForm');


var PhotoIndex = React.createClass({
	getInitialState: function () {
		var photos = this.props.photos;
		return ({photos: photos, modalIsOpen: false});
	},

	componentWillMount: function () {
		this.businessListener = BusinessStore.addListener(this._onChange);
	},

	componentWillUnmount: function () {
		this.businessListener.remove();
	},

	_onChange: function () {
		var photos = BusinessStore.find(this.props.businessId).photos;
		this.setState({photos: photos});
	},

	render: function() {
		var photos = this.state.photos.map(function (photo) {
			return <PhotoIndexItem key={photo.id} photo={photo}/>;
		});
		return (
			<div className="photos">
				<div className="photo-index">
					{photos}
				</div>
				<PhotoForm 
					businessId={this.props.businessId} 
				/>
			</div>
		);
	}

});

module.exports = PhotoIndex;

