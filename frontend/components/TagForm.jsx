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
		this.setState({tags: TagStore.all()});
	},

	render: function() {
		var handleTags = this.props.handleTags;
		var tags = this.state.tags.map(function (tag) {
			return (
					<label key={tag.id} >
						<input type="checkbox" 
								 onChange={handleTags} 
								 value={tag.id}/>
						{tag.name}
					</label>
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