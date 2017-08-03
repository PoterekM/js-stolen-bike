var recoveredBikes = require('./../js/bikes.js').recoveredBikesModule;

var displayRecoveredBikes = function(city, bikeData) {
  $('.results').append("<li>" + bikeData + "</li>");
};



$(document).ready(function(){
  $('#bike-location-form').submit(function(event){
    event.preventDefault();
    var city = $('#city').val();
    $('#city').val("");
    recoveredBikeObject.getBikes(city, displayRecoveredBikes);
  });
});
