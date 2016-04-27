var UserStore = require('../stores/user');
var UserActions = require('../actions/UserActions');

var CurrentUserState = {

	getInitialState: function(){
		return {
			currentUser: UserStore.currentUser(),
			userErrors: UserStore.errors()
		};
	},
	componentDidMount: function(){
		UserStore.addListener(this.updateUser);
		if (typeof UserStore.currentUser() === 'undefined') {
			UserActions.fetchCurrentUser();
		}
	},
	updateUser: function(){
		this.setState({
			currentUser: UserStore.currentUser(),
			userErrors: UserStore.errors()
		});
	}
	
};

module.exports = CurrentUserState;