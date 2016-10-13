(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "AIzaSyAeVdgoAG8cXppPxqFc1kkbVJUru7P1-Mc";

},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
var Tour = require('./../js/maps.js').tourModule;
var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  var tour = new Tour();

  setTimeout(function() {
    tour.initMap();
  }, 1000);
});

},{"./../.env":1,"./../js/maps.js":2}]},{},[3]);
