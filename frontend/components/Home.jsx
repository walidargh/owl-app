var React = require('react');
var hashHistory = require('react-router').hashHistory;

var Home = React.createClass({
	welcomeHandler: function (event) {
		debugger
		hashHistory.push('/businesses/');
	},


	render: function() {
		return (
			<div className="splash">

				<h1 className={"welcome-text"}>Welcome to Howler!</h1>
				<h2>Find the best shops and restaurants the Wizarding World has to Offer</h2>
				<button className="welcome-button" 
								onClick={this.welcomeHandler}>
					Get to Exploring, its a Hoot!
				</button>

			</div>
		);
	}

});

module.exports = Home;