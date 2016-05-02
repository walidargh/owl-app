var React = require('react');
var Modal = require('react-modal');
var UserStore = require('../stores/user');
var BusinessStore = require('../stores/business');
var FormConstants = require('../constants/FormConstants');
var LoginForm = require('../components/LoginForm');
var BusinessForm = require('../components/BusinessForm');
var ReviewForm = require('../components/ReviewForm');

Modal.setAppElement(document.body);

var formModal = React.createClass({
	getInitialState: function () {
		return ({modalIsOpen: false});
	},

	componentWillMount: function () {
		this.businessListener = BusinessStore.addListener(this._onChange);
		this.userListener = UserStore.addListener(this._onChange);
	},

	componentWillReceiveProps: function (newProps) {
		this.setState({modalIsOpen : newProps.modalIsOpen});
	},

	_onChange: function () {
		this.closeModal();
	},

	openModal: function () {
		this.setState({modalIsOpen: true});
	},

	closeModal: function () {
		this.setState({modalIsOpen: false});
	},

 	form: function () {
		if (UserStore.currentUser()) {
			var form;
			switch(this.props.modalFormType) {
				case FormConstants.LOGINFORM:
					form = <LoginForm formType={this.props.formType}/>;
				break;

				case FormConstants.BUSINESSFORM:
					form = <BusinessForm />;
				break;

				case FormConstants.REVIEWFORM:
					form = <ReviewForm businessId={this.props.businessId}/>;
				break;
			}
			return form;
		} else {
				return (<LoginForm formType={this.props.formType}/>);
			}
 	},

 	render: function () {
 		return (
 			<Modal
				isOpen={this.state.modalIsOpen} 
				onRequestClose={this.closeModal}>
				{this.form()}
			</Modal>
		);
 	}
});

module.exports = formModal;