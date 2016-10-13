var Tour = require('./../js/maps.js').tourModule;
var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  var tour = new Tour();

  setTimeout(function() {
    tour.initMap();
  }, 1000);
});
