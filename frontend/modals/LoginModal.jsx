var React = require('react');
var Modal = require('react-modal');
var LoginForm = require('../components/LoginForm')

Modal.setAppElement(document.body);

var LoginModal = React.createClass({

	getInitialState: function () {
		return ({modalOpen: true});
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
		return(<div>
			<Modal isOpen={this.state.modalOpen} onRequestClose={this.closeModal}>
				<div>..content</div>
				<LoginForm />
			</Modal>
		</div>
	)}

});

module.exports = LoginModal;