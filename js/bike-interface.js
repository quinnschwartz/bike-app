
$(document).ready(function() {
  $('#answer').hide();
  $('#bikeLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=' + city + '&distance=25&stolenness=proximity').then(function(response) {
      $('.showBikes').text(response.bikes.forEach(function(bike) {
        $('.showBikes').append("<li>" + bike.title + "</li>");
        console.log(response);
      })
      .fail(function(error) {
        $('.$showBikes').text(error.responseJSON.message);
      }));
    });
    $('#answer').show();
  });
});
