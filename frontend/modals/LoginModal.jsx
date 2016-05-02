var React = require('react');
var Modal = require('react-modal');
var LoginForm = require('../components/LoginForm');

Modal.setAppElement(document.body);

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

var LoginModal = React.createClass({

	getInitialState: function () {
		return ({modalOpen: false});
	},

	handleClick: function () {
		this.setState({modalOpen: true});
	},

	closeModal: function () {
		this.setState({modalOpen: false});
	},

	openModal: function () {
		this.setState({ modalOpen: true});
	},

	render: function () {
		console.log("I am in the modal render");
		console.log("The modal is open:" +  this.state.modalOpen);
		return(
			<div>
				<Modal 
					isOpen={this.state.modalOpen} 
					style={customStyles}
				>
					<div>I am the modal</div>
					<LoginForm />
				</Modal>
			</div>
	);}

});

module.exports = LoginModal;