var React = require('react');
var ReactDOM = require('react-dom');
var LoginForm = require('./components/LoginForm');

document.addEventListener("DOMContentLoaded", function () {
	var root = document.getElementById('root');
	ReactDOM.render( <LoginForm />, root );
});
