var React = require('react');
var Modal = require('react-modal');
var LoginForm = require('./LoginForm');
var UserActions = require('../actions/UserActions');
var UserStore = require('../stores/user');
var BusinessStore = require('../stores/business');
var BusinessIndex = require('./BusinessIndex');
var hashHistory = require('react-router').hashHistory;


var App = React.createClass({

  getInitialState: function() {
    var formType =  (UserStore.currentUser()) ? "Log Out" : "Log In";
    return { modalIsOpen: false, formType: formType};
  },

  componentWillMount: function () {
    this.userListener = UserStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.userListener.remove();
  },

  _onChange: function () {
    this.setState({modalIsOpen: false});
    if (UserStore.currentUser()) {
      this.setState({formType: "Log Out"});
    } else {
      this.setState({formType: "Log In"});
    }

  },

  openModal: function() {
    this.setState({modalIsOpen: true});
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },

  // afterOpenModal: function() {
  //   // references are now sync'd and can be accessed.
  //   this.refs.subtitle.style.color = '#f00';
  // },

  loginForm: function () {
    this.setState({formType: "Log In"});
    this.openModal();
  },

  signupForm: function() {
    this.setState({formType: "Sign Up"});
    this.openModal();    
  },

  logout: function () {
    UserActions.logout();
  },

  showBusiness: function () {
    hashHistory.push('/businesses/');
  },

  logButton: function () {
    if (this.state.formType === "Log Out") {
      return (<button className="log-out-button" onClick={this.logout}>Sign Out</button>);
    } else {
        return (
          <div className="not-loggedin"> 
            <button className="log-in-button" onClick={this.loginForm}>Log In</button>
            <button className="sign-up-button" onClick={this.signupForm}>Sign Up</button>
          </div>
        );
      }
  },

  render: function() {
    return (
      <header>
        {this.logButton()}
        <Modal
          isOpen={this.state.modalIsOpen}
          // onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          >
          <button onClick={this.closeModal}>close</button>
          <LoginForm formType={this.state.formType} />
        </Modal>
        <button onClick={this.showBusiness}>View Businesses</button>
        {this.props.children}
      </header>
    );
  }
});

module.exports = App;