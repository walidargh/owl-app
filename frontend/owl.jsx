var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Modal = require('react-modal');
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var LoginForm = require('./components/LoginForm');
var LoginModal = require('./modals/LoginModal');
var UserActions = require('./actions/UserActions');
var UserStore = require('./stores/user');
var BusinessIndex = require('./components/BusinessIndex');

UserActions.fetchCurrentUser();

var customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

var App = React.createClass({

  getInitialState: function() {
    return { modalIsOpen: false, formType: "Log In" };
  },

  componentWillMount: function () {
    UserStore.addListener(this._onChange);
  },

  _onChange: function () {
    this.setState({modalIsOpen: false});
    if (UserStore.currentUser()) {
      console.log('something is changing and the current user exists')
      this.setState({formType: "Log Out"});
    } else {
      console.log('something is changing and the current user does not exists')
      this.setState({formType: "Log In"});
    }

  },

  openModal: function() {
    this.setState({modalIsOpen: true});
  },

  // afterOpenModal: function() {
  //   // references are now sync'd and can be accessed.
  //   this.refs.subtitle.style.color = '#f00';
  // },

  loginForm: function () {
    console.log('I clicked the log in button')
    this.setState({formType: "Log In"});
    this.openModal();
  },

  signupForm: function() {
    console.log('I clicked the sign up button')
    this.setState({formType: "Sign Up"});
    this.openModal();    
  },

  logout: function () {
    console.log("I clicked the log out button")
    UserActions.logout();
  },

  logButton: function () {
    if (this.state.formType === "Log Out") {
      return (<button onClick={this.logout}>Sign Out</button>);
    } else {
        return (
          <div> 
            <button onClick={this.loginForm}>Log In</button>
            <button onClick={this.signupForm}>Sign Up</button>
          </div>
        );
      }
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },

  render: function() {
    return (
      <div>
        {this.logButton()}
        <Modal
          isOpen={this.state.modalIsOpen}
          // onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles} >
          <button onClick={this.closeModal}>close</button>
          <LoginForm formType={this.state.formType} />
        </Modal>
        {this.props.children}
      </div>
    );
  }
});


var appRouter = (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<Route path="user/" component={LoginModal} />
      <IndexRoute component={BusinessIndex} />
      <Route path="businesses/" component={BusinessIndex} />
		</Route>
	</Router>
);

document.addEventListener("DOMContentLoaded", function () {
	var root = document.getElementById('root');
  Modal.setAppElement(document.body);
	ReactDOM.render(appRouter, root );
});