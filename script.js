// var L = require('leaflet')


var mapid = L.map('mapid',{
  center: [35.621582, -82.595215],
  zoom: 6
  });

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mapid);
