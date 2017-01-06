
var Bike = require('./../js/bike.js').bikeModule;

$(document).ready(function() {
  var currentBikeObject = new Bike();
  $('.showBikes').hide();
  $('#question').hide();
  $('#findBike').click(function() {
    event.preventDefault();
    $('.showBikes').empty();

    var location = $('#location').val();
    // var color = $('#color').val();
    $('#location').val("");
    // $('#color').val("");

    currentBikeObject.getBikes(location);
    // currentBikeObject.getColoredBikes(location, color);

    $('.showBikes').show();
    $('#question').show();
  });
});
