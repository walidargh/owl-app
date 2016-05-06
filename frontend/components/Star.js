var React = require('react');

// var Star = React.createClass({
// 	star: function () {
// 		if (this.props.hover) {
// 			return <div className="empty-star"></div>;
// 		} else
// 			return <div className="full-star"></div>;
// 	},

// 	render: function() {
// 		return (
// 			<div>{this.star()}</div>
// 		);
// 	}

// });

var Star = React.createClass({
  render: function() {
      var r = 'fa fa-star';
      if(!this.props.selected){
          r += '-o';
        }
        return (
          <i {...this.props} className={r}/>
        );
    }
});

module.exports = Star;