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
						<li class="business-index-item">
							{business.name}
							{business.hours}
							{business.price}
							{business.address}
						</li>
						);
	}
});

module.exports = BusinessIndexItem;