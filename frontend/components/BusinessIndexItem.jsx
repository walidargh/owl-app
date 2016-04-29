var React = require('react');

var BusinessIndexItem = React.createClass({
	showDetail: function () {
		this.context.router.push('/businesses/' + this.props.business.id);
	}, 

 	render: function () {
		var business = this.props.business;
		// create link to on business name that 
		// will open the business detail by passing 
		// it a prop with the business id
		// the class will be used to stylize the css
		// this item will have a pic, stars, title, brief blurb,
		// maybe neighborhood
		return (
			<ul className="business-index-item" onClick={this.showDetail}>
				<li className="business-index-title">{business.name}</li>
				<li className="business-index-hours">{business.hours}</li>
				<li className="business-index-price">{business.price}</li>
				<li className="business-index-address">{business.address}</li>
				<li className="business-index-image"></li>
			</ul>
						);
	}
});

module.exports = BusinessIndexItem;