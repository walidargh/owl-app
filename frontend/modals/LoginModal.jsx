var React = require('react');
var Modal = require('react-modal')

Modal.setAppElement(document.body);

getInitialState: function () {
	return ({modalOpen: false});
},

handleClick: function () {
	this.setState({modalOpen: true});
},


render: function () {
	<Modal isOpen={this.state.modalOpen} >
}
