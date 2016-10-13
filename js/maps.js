function Tour() {
  var map;
}

var shows = {
  showOne : { lat: 45.5154, lng: -122.6621, desc: 'I am a description'},
  showTwo : { lat: 45.5156, lng: -122.6813 }
}

Tour.prototype.initMap = function(show) {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 45.524, lng: -122.6624 },
    zoom: 9
  });

  var showOneMarker = new google.maps.Marker({
    position: shows['showOne'],
    map: map,
    title: 'Show One!'
  });

  var showTwoMarker = new google.maps.Marker({
    position: shows['showTwo'],
    map: map,
    title: 'Show Two!'
  })
}

exports.tourModule = Tour;
