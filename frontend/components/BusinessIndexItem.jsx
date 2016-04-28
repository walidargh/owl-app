var React = require('react');

var BusinessIndexItem = React.createClass({
	render: function () {
		var business = this.props.business;
		// create link to on business name that 
		// will open the business detail by passing 
		// it a prop with the business id
		// the class will be used to stylize the css
		// this item will have a pic, stars, title, brief blurb,
		// maybe neighborhood
		return (
						<ul className="business-index-item">
							<li className="business-index-title">{business.name}</li>
							<li className="business-index-attr">{business.hours}</li>
							<li className="business-index-attr">{business.price}</li>
							<li className="business-index-attr">{business.address}</li>
						</ul>
						);
	}
});

module.exports = BusinessIndexItem;