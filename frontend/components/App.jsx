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
var BusinessError = require('../components/BusinessError');
var TagFilter = require('./TagFilter');

var customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)',
    zIndex            : 1000
  },

  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    borderRadius          : '10px',
    transform             : 'translate(-50%, -50%)',
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

  componentWillUnmount: function () {
    this.businessListener.remove();
    this.userListener.remove();
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

  updateTags: function (event) {
    var tag_ids = this.state.tag_ids;
    var tagId = parseInt(event.target.value);
    var index = tag_ids.indexOf(tagId);
    if (index === -1) {
      tag_ids.push(tagId);
    } else {
      tag_ids.splice(index, 1);
    }
    this.setState({tag_ids: tag_ids});
  },

  logButton: function () {
    if (this.state.formType === "Log Out") {
      return (

        <div className="button-wrapper">
          <button className="log-out-button" onClick={this.logout}>
            Sign Out
          </button>
        </div>

      );
    } else {
        return (
          <div className="not-loggedin"> 

            <div className="button-wrapper">
              <button className="log-in-button" onClick={this.loginForm}>
                Log In
              </button>
            </div>

            <div className="button-wrapper">
              <button className="sign-up-button" onClick={this.signupForm}>
                Sign Up
              </button>
            </div>

          </div>
        );
      }
  },

  render: function() {
    return (
      <div className="app">
        <div className="nav-bar">
          <div className="button-wrapper">
            <button onClick={this.showBusiness}>View Businesses</button>
          </div>
  
          <Search location={this.props.location} updateTags={this.updateTags}/>
          <BusinessError />
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

