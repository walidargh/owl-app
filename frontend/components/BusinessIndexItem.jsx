var React = require('react');
var hashHistory = require('react-router').hashHistory;
var ClientActions = require('../actions/ClientActions');


var BusinessIndexItem = React.createClass({
	showDetail: function () {
		ClientActions.fetchSingleBusiness(this.props.business.id);
		hashHistory.push('/businesses/' + this.props.business.id);
	}, 

 	render: function () {
		var business = this.props.business;
		var photo;
		var featured = business.photos ? business.photos[0] : business.featured;
		if (featured) {
			photo = <img src={featured.url} />;
		} else {
			photo = <div></div>;
		}
		
		var price = Array(business.price + 1).join("$");
		var tags;
		if (business.tags.length) {
			tags = business.tags.map(function (tag) {
				return <li className="business-index-tag" key={tag.id}>{tag.name}</li>;
			});
		} else {
			tags = <div></div>;
		}
		var rating = "No Reviews";
		if (business.rating !== "null") {
			rating = business.rating;
		}
		return (
			<div className="business-index-item" onClick={this.showDetail}>
				<div className="business-index-image">{photo}</div>

				<ul className="business-index-text" onClick={this.showDetail}>
					<li className="business-index-title">{business.name}</li>
					<li className="business-index-hours">{business.hours}</li>
					<li className="business-index-price">{price}</li>
					<li className="business-index-address">{business.address}</li>
					<ul className="business-index-tags">{tags}</ul>
					<li className="business-index-rating">{rating}</li>
				</ul>
				
			</div>
		);
	}
});

module.exports = BusinessIndexItem;