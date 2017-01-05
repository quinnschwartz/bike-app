Bike = function(city) {
    this.city = city;
};

Bike.prototype.getBikes = function(city) {
  var baseUri = ('http://www.convert-unix-time.com/api?');
  $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=' + city + '&distance=25&stolenness=proximity').then(function(response) {
    $('.showBikes').text(response.bikes.forEach(function(bike) {
      $('.showBikes').append("<li>" + bike.title + " " + bike.serial + " " + new Date(bike.date_stolen * 1000) + "</li>");
      console.log(response);
    }));
  })
    .fail(function(error) {
      $('.$showBikes').text(error.responseJSON.message);
  });
};

function convertUnixTimeCallback(result){
    console.log(result);
}






exports.bikeModule = Bike;
