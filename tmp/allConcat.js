
var Bike = require('./../js/bike.js').bikeModule;

$(document).ready(function() {
  var currentBikeObject = new Bike();
  $('.showBikes').hide();
  $('#question').hide();
  $('#bikeLocation').click(function() {
    event.preventDefault();
    $('.showBikes').empty();

    var city = $('#location').val();
    $('#location').val("");

    currentBikeObject.getBikes(city);

    $('.showBikes').show();
    $('#question').show();
  });
});
