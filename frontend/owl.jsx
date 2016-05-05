var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Modal = require('react-modal');
var UserActions = require('./actions/UserActions');
var UserStore = require('./stores/user');
var BusinessStore = require('./stores/business');
var App = require('./components/App');
var BusinessIndex = require('./components/BusinessIndex');
var BusinessDetail = require('./components/BusinessDetail');
var Search = require('./components/Search');

UserActions.fetchCurrentUser();

var appRouter = (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
      <Route path="businesses" component={BusinessIndex} />
      <Route path="businesses/:businessId" component={BusinessDetail} />
		</Route>
	</Router>
);

document.addEventListener("DOMContentLoaded", function () {
	var root = document.getElementById('root');
  Modal.setAppElement(document.body);
	ReactDOM.render(appRouter, root );
});

//local store