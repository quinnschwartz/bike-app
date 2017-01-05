
var Bike = require('./../js/bike.js').bikeModule;

$(document).ready(function() {
  var bikeObject = new Bike();

  $('#bikeLocation').click(function() {
    event.preventDefault();
    $('.showBikes').empty();

    var city = $('#location').val();
    $('#location').val("");

    var result = bikeObject.getBikes(city);

    result.bikes.forEach(function(bike) {
      $('.showBikes').append("<li>" + bike.title + " " + bike.serial + "</li>");
      console.log(response);
    });

    $('#answer').show();
  });
});
