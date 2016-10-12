var apiKey = "AIzaSyAeVdgoAG8cXppPxqFc1kkbVJUru7P1-Mc";

$(document).ready(function()) {
  $("#locationEnter").submit(function(event) {
    var map;
    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.4567374, lng: -79.9942303},
        zoom: 8;
      });
    }
  });
}
