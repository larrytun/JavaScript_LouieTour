function Tour() {
  var map;
}

var markers = [
  ['NJPAC', 40.740225, -74.1695107],
  ['Palace Theatre', 40.7588483, -73.9856229],
  ['Peterson Events Center', 40.4438281, -79.9644721],
  ['Charleston Gaillard Center', 32.786798, -79.9329117],
  ['Wells Fargo Center', 39.9012015, -75.1741682],
  ['Music Hall at Fair Park', 32.780388, -96.7681767],
  ['Adrienne Arsht Center', 25.7877534, -80.1908126],
  ['DAR Constitution Hall', 38.8938578, -77.042513],
  ['Dolby Theatre', 34.1026919, -118.3426043],
  ['Doug Mitchell Thunderbird Sports Centre', 49.2600322, -123.2438885],
  ['WaMu Theater', 47.5933001, -122.3344421],
  ['Paramount Theatre', 47.6135055, -122.3339476],
  ['Madison Square Garden', 40.7505045, -73.9934387],
  ['The Moody Theater', 30.2655684, -97.7495117],
  ['Bellco Theatre', 39.74105, -105.0000642],
  ['Moda Center', 45.5315651, -122.669031],
];

var contentString = "blahblahblah";

Tour.prototype.initMap = function(show) {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 39.8282,
      lng: -98.5795
    },
    zoom: 4,
    mapTypeId: 'terrain'
  });

  var iconBase = 'img/louiefacepurp.png';

  for (i = 0; i < markers.length; i++) {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(markers[i][1], markers[i][2]),
      map: map,
      title: (markers[i][0]),
      icon: iconBase
    });

    var infoWindow = new google.maps.InfoWindow({
      content: markers[i][0],
      position: new google.maps.LatLng(markers[i][1], markers[i][2])
    });

    bindInfoWindow(marker, map, infoWindow, markers[i][0]);
  }
};

function bindInfoWindow(marker, map, infoWindow, description) {
  marker.addListener('click', function() {
    infoWindow.setContent(description);
    infoWindow.open(map, this);
  });
}
exports.tourModule = Tour;
