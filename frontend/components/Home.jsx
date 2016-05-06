var React = require('react');
var hashHistory = require('react-router').hashHistory;

var Home = React.createClass({
	welcomeHandler: function (event) {
		hashHistory.push('/businesses/');
	},


	render: function() {
		return (
			<div className="splashText">

				<h1>Welcome to Howler!</h1>
				<button className="welcome-button" 
								onClick={this.welcomeHandler}>
					Get to Exploring, its a hoot!
				</button>

			</div>
		);
	}

});

module.exports = Home;