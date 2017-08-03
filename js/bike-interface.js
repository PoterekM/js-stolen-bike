var Bikes = require('./../js/bikes.js').bikesModule;

var displayBikes = function(manufacturer, location, bikeData) {
  console.log(bikeData);

  bikeData.forEach(function(bike){
    // console.log(bike);
    $('#results').append("<li>" + bike.title + " " + "serial number " + bike.serial + " " + bike.frame_colors + "</li>");
  });
};



$(document).ready(function(){
  var bikes = new Bikes();
  $('#bike-location-form').submit(function(event){
    event.preventDefault();
    var location = $('#city').val();
    var manufacturer = $('#manufacturer').val();
    bikes.getBikes(manufacturer, location, displayBikes);

  });
});
