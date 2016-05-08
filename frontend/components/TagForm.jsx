var React = require('react');
var TagStore = require('../stores/tag');
var ClientActions = require('../actions/ClientActions');

var TagForm = React.createClass({
	getInitialState: function () {
		return ({tags: []});
	},

	componentWillMount: function () {
		ClientActions.fetchTags();
		this.tagListener = TagStore.addListener(this._onChange);
	},

	componentWillUnmount: function () {
		this.tagListener.remove();
	},

	_onChange: function () {
		debugger
		this.setState({tags: TagStore.all()});
	},

	render: function() {
		var handleTag = this.props.handleTag;
		var tags = this.state.tags.map(function (tag) {
			return (
				<div className="tag-index-item">
					<label>{tag.name}</label>
					<input type="checkbox" key={tag.id}/>
				</div>
				);
		});

		return (
			<div className="tag-index"> 
				{tags}
			</div>
		);
	}

});

module.exports = TagForm;