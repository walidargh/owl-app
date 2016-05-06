var React = require('react');
var Modal = require('react-modal');
var LoginForm = require('./LoginForm');
var UserActions = require('../actions/UserActions');
var UserStore = require('../stores/user');
var BusinessStore = require('../stores/business');
var BusinessIndex = require('./BusinessIndex');
var hashHistory = require('react-router').hashHistory;
var Search = require('./Search');
var ClientActions = require('../actions/ClientActions');


var customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    borderRadius          : '10px',
    transform             : 'translate(-50%, -50%)'
  }
};

var App = React.createClass({

  getInitialState: function() {
    var formType =  (UserStore.currentUser()) ? "Log Out" : "Log In";
    return { modalIsOpen: false, formType: formType, modalFormType:"" };
  },

  componentWillMount: function () {
    this.businessListener = BusinessStore.addListener(this._onChange);
    this.userListener = UserStore.addListener(this._onChange);
  },

  _onChange: function () {
    if (UserStore.currentUser()) {
      this.setState({formType: "Log Out"});
    } else {
      this.setState({formType: "Log In"});
    }
    if (UserStore.errors().length === 0) {
      this.closeModal();
    }
  },

  openModal: function () {
    this.setState({modalIsOpen: true});
  },

  closeModal: function () {
    this.setState({modalIsOpen: false});
    this.setState({modalFormType: ""});
  },

  setModalForm: function (modalFormType) {
    this.setState({modalFormType: modalFormType});
  },

  loginForm: function () {
    this.setState({formType: "Log In"});
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
    ClientActions.fetchBusinesses();
    hashHistory.push('/businesses/');
  },

  logButton: function () {
    if (this.state.formType === "Log Out") {
      return (
        <button className="log-out-button" onClick={this.logout}>
          Sign Out
        </button>
      );
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
    return (
      <div className="app">
        <div className="nav-bar">
          <button onClick={this.showBusiness}>View Businesses</button>
          <Search location={this.props.location}/>
          {this.logButton()}
        </div>

        <Modal 
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          >

          <LoginForm formType={this.state.formType} />

        </Modal>

        <div className="content-body">
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = App;

