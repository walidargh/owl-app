var React = require('react');
var Modal = require('react-modal');
var LoginForm = require('./LoginForm');
var UserActions = require('../actions/UserActions');
var UserStore = require('../stores/user');
var BusinessStore = require('../stores/business');
var BusinessIndex = require('./BusinessIndex');
var hashHistory = require('react-router').hashHistory;
var FormModal = require('../modals/FormModal');
var FormConstants = require('../constants/FormConstants');
var Search = require('./Search');


var App = React.createClass({

  getInitialState: function() {
    var formType =  (UserStore.currentUser()) ? "Log Out" : "Log In";
    return { modalIsOpen: false, formType: formType};
  },

  componentWillMount: function () {
    this.userListener = UserStore.addListener(this._onChange);
  },

  _onChange: function () {
    if (UserStore.currentUser()) {
      this.setState({formType: "Log Out"});
    } else {
      this.setState({formType: "Log In"});
    }
  },

  openModal: function () {
    this.setState({modalIsOpen: true});
  },

  loginForm: function () {
    this.setState({formType: "Log In"});
    this.state.formType = "Sign Up";
    this.openModal();
  },

  signupForm: function() {
    this.setState({formType: "Sign Up"});
    // this.setState called asynchronously and did not update is there 
    this.openModal();    
  },

  logout: function () {
    UserActions.logout();
  },

  showBusiness: function () {
    debugger
    hashHistory.push('/businesses/');
  },

  updateQuery: function () {
    debugger
    this.showBusiness();
  },

  logButton: function () {
    if (this.state.formType === "Log Out") {
      return (<button className="log-out-button" onClick={this.logout}>Sign Out</button>);
    } else {
        return (
          <div className="not-loggedin"> 
            <button className="log-in-button" onClick={this.loginForm}>
              Log In
            </button>

            <button className="sign-up-button" onClick={this.signupForm}>
              Sign Up
            </button>
          </div>
        );
      }
  },

  render: function() {
    debugger
    return (
      <div className="app">
        <div className="nav-bar">
          {this.logButton()}
          <FormModal 
            modalIsOpen={this.state.modalIsOpen} 
            modalFormType={FormConstants.LOGINFORM} 
            formType={this.state.formType}
          />
          <button onClick={this.showBusiness}>View Businesses</button>
          <Search className="search-bar"/>
        </div>

        <div className="content-body">
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = App;

