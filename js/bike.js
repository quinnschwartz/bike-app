Bike = function() {
    this.serial = serial;
    this.title = title;
};

Bike.prototype.getBikes = function(city) {
  $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=' + city + '&distance=25&stolenness=proximity').then(function(response) {
    $('.showBikes').text(response.bikes);
  })
    .fail(function(error) {
      $('.$showBikes').text(error.responseJSON.message);
  });
};




exports.bikeModule = Bike;
