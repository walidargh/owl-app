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

UserActions.fetchCurrentUser();

// var App = React.createClass({
//   render: function(){
//     return (
//         <div>
//           <header><h1>Owl</h1></header>
//            <Modal isOpen={true} >
//             <div>Here I am</div>
//            </Modal>
//            <div>is the modal above me</div>
//            {this.props.children}
//         </div>
//     );
//   }
// });

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

  openModal: function() {
    this.setState({modalIsOpen: true});
  },

  // afterOpenModal: function() {
  //   // references are now sync'd and can be accessed.
  //   this.refs.subtitle.style.color = '#f00';
  // },

  logButton: function () {
    if (UserStore.currentUser) {
      return (<button onClick={this.logout}>Sign Out</button>);
    } else {
        return (
          <div> 
            <button onClick={this.login}>Log In</button>
            <button onClick={this.signup}>Sign Up</button>
          </div>
        );
      }
  },

  login: function () {
    this.setState({formType: "Log In"});
    this.openModal();
  },

  signup: function() {
    this.setState({formType: "Sign Up"});
    this.openModal();    
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },

  render: function() {
    return (
      <div>
        <button onClick={this.openModal}>Sign Up</button>
        <button onClick={this.openModal}>Sign In</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          // onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles} >
          <button onClick={this.closeModal}>close</button>
          <LoginForm formType={this.state.formType} />
        </Modal>
      </div>
    );
  }
});


var appRouter = (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<Route path="user/" component={LoginModal} />
		</Route>
	</Router>
);

document.addEventListener("DOMContentLoaded", function () {
	var root = document.getElementById('root');
  Modal.setAppElement(document.body);
	ReactDOM.render(appRouter, root );
});