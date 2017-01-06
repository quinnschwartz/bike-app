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
