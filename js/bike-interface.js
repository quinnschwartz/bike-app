
$(document).ready(function() {
  $('#bikeLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=' + city + '&distance=25&stolenness=proximity', function(response) {
      $('.showBikes').text(response.bikes);
    });
  });
});
