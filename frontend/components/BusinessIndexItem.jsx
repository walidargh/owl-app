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
			photo = <li className="business-index-image"><img src={business.featured.url} /></li>
		} else {
			photo = <div></div>;
		}
		return (
			<ul className="business-index-item" onClick={this.showDetail}>
				<li className="business-index-title">{business.name}</li>
				<li className="business-index-hours">{business.hours}</li>
				<li className="business-index-price">{business.price}</li>
				<li className="business-index-address">{business.address}</li>
				{photo}
			</ul>
		);
	}
});

module.exports = BusinessIndexItem;