var React = require('react');

var RatingForm = React.createClass({
  getInitialState: function () {
    return ({max: 5, hoverIndex: -1})
  },

  hoverStar: function (index) {
    this.setState({hoverIndex:index});
  },

  leaveStar: function () {
    this.setState({hoverIndex: -1});
  },

  render: function () {
      return (
      );
    }
});

module.exports = RatingForm;