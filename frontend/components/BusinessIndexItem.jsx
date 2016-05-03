var React = require('react');
var hashHistory = require('react-router').hashHistory;
var ClientActions = require('../actions/ClientActions');


var BusinessIndexItem = React.createClass({
	showDetail: function () {
		hashHistory.push('/businesses/' + this.props.business.id);
	}, 

 	render: function () {
		var business = this.props.business;
		var photo
		if (business.featured) {
			photo = <img src={business.featured.url} />
		} else {
			photo = <div></div>;
		}
		return (
			<div className="business-index-item" onClick={this.showDetail}>
				<ul className="business-index-text" onClick={this.showDetail}>
					<li className="business-index-title">{business.name}</li>
					<li className="business-index-hours">{business.hours}</li>
					<li className="business-index-price">{business.price}</li>
					<li className="business-index-address">{business.address}</li>
				</ul>
				<div className="business-index-image">{photo}</div>
			</div>
		);
	}
});

module.exports = BusinessIndexItem;