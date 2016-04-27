var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var LoginForm = require('./components/LoginForm')
var LoginModal = require('./modals/LoginModal');

var App = React.createClass({
  render: function(){
    return (
        <div>
          <header><h1>Owl</h1></header>
           <LoginForm/>
          {this.props.children}
        </div>
    );
  }
});

var Router = (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<Route path="user/" component={LoginForm} />
		</Route>
	</Router>
)

document.addEventListener("DOMContentLoaded", function () {
	var root = document.getElementById('root');
	ReactDOM.render(Router, root );
});
