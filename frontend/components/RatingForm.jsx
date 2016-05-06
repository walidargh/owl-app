var React = require('react');
var Star = require('./Star');
// var RatingForm = React.createClass({
//   getInitialState: function () {
//     return ({max: 5, hoverIndex: -1})
//   },



//   render: function () {
//       return (
//         for (var i = 0; i < this.max; i--) {
//           0[i]
//         }
//       );
//     }
// });

// module.exports = RatingForm;


var RatingForm = React.createClass({
  getInitialState: function(){
      return {rating: 0, hoverAt: null};
    },
    handleMouseOver: function(idx, evt){
      this.state.hoverAt = idx + 1;
        this.forceUpdate();
    },
    handleMouseOut: function(idx, evt){
      this.state.hoverAt = null;
        this.forceUpdate();
    },
    handleClick: function(idx, evt){
        this.state.rating = idx + 1;
        this.props.handleRating(this.state.rating);
        this.forceUpdate();
        console.log('clicked');
    },
  render: function(){
      var stars = [];
        for(var i = 0 ; i < 5; i++){
          var rating = this.state.hoverAt != null ? this.state.hoverAt : this.state.rating;
          var selected = (i < rating);
          stars.push(
            <Star key={i} selected={selected}
              onMouseOver={this.handleMouseOver.bind(this, i)}
              onMouseOut={this.handleMouseOut.bind(this, i)}
              onClick={this.handleClick.bind(this, i)}
            />);
        }
      return (<div>{stars}</div>);
    }
});


// var RatingForm= React.createClass({
//   getInitialState: function () {
//     return ({value: 0, highlighted: 0, maxStars: 5})
//   },

//   hoverStar: function (event) {
//     this.setState({highlighted:event.target.value});
//   },

//   leaveStar: function () {
//     this.setState({highlighted: 0});
//   },

//   render: function () {
//     debugger
//     var Stars
//     var self = this
//         for (var i = 0; i < this.max; i++) {
//           if (self.state.highlighted > i) {
//             Stars.push(<Star hover={false} onMouseOver={this.hoverStar} onMouse={this.leaveStar} onClick={this.starValue} value={i} />)
//           } else {
//             Stars.push(<Star hover={true} onMouseOver={this.hoverStar} onMouse={this.leaveStar} onClick={this.starValue} value={i} />)
//           }
//         }

//     return (
//       <div className="rating-form">
//         {Stars}
//       </div>
//     )
//   }
// })

module.exports = RatingForm;