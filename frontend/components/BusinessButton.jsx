var React = require('react');

var BusinessButton = React.createClass({

	render: function() {
		return (
				<button 
					className="new-business" 
					onClick={this.openModal}>
					New Business
				</button>
		);
	}

});

module.exports = BusinessButton;