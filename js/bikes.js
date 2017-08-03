// function Bikes =

function Bikes() {

}


Bikes.prototype.getBikes = function(manufacturer, location, displayBikes) {
    $.get('https://bikeindex.org/api/v3/search?manufacturer=' + manufacturer + '&location=' + location + '&distance=10&stolenness=stolen')
    .then(function(response) {
        displayBikes(manufacturer, location, response.bikes);
        console.log(location);
    }).fail(function(error) {
      $('#results').text(error.responseJSON.message);
    });
};

exports.bikesModule = Bikes;
