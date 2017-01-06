(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
Bike = function(location) {
    this.location = location;
    // this.color = color;
};

Bike.prototype.getBikes = function(location) {
  $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=' + location + '&distance=25&stolenness=proximity').then(function(response) {
    $('.showBikes').text(response.bikes.forEach(function(bike) {
      $('.showBikes').append("<li>" + "<span>Year, make and model:</span>" + " " + bike.title + "<br>" + "<span>Serial number:</span>" + " " +  bike.serial + "<br>" + "<span>Date reported stolen:</span>" + " " + new Date(bike.date_stolen * 1000) + "</li>");
      console.log(response);
    }));
  })
    .fail(function(error) {
      $('.$showBikes').text(error.responseJSON.message);
  });
};
// 
// Bike.prototype.getColoredBikes = function(location, color) {
//   $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=' + location + '&distance=25&stolenness=proximity').then(function(response) {
//     var color = this.color;
//     response.bikes.forEach(function(bike){
//       if (bike.frame_colors === color) {
//         this.getbikes();
//       }
//     });
//   });
// };


exports.bikeModule = Bike;

},{}],2:[function(require,module,exports){

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

},{"./../js/bike.js":1}]},{},[2]);
