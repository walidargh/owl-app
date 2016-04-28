var React = require('react');

var RatingForm = React.createClass({
  render: function () {
      return (
        <form id="ratings-form">
          <div class="stars">
            <input type="radio" name="star" class="star-1" id="star-1" value="1"/>
            <label class="star-1" for="star-1">1</label>
            <input type="radio" name="star" class="star-2" id="star-2" value="2"/>
            <label class="star-2" for="star-2">2</label>
            <input type="radio" name="star" class="star-3" id="star-3" value="3"/>
            <label class="star-3" for="star-3">3</label>
            <input type="radio" name="star" class="star-4" id="star-4" value="4"/>
            <label class="star-4" for="star-4">4</label>
            <input type="radio" name="star" class="star-5" id="star-5" value="5"/>
            <label class="star-5" for="star-5">5</label>
            <span></span>
          </div>
        </form>
      );
    }
});

module.exports = RatingForm;