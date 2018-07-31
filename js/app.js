var map1;
var map2;
function initMap() {
  map1 = new google.maps.Map(document.getElementById('map1'), {
  center: {lat: -23.55052, lng: -46.6333},
  zoom: 8
	});

  map2 = new google.maps.Map(document.getElementById('map2'), {
  center: {lat: -23.55052, lng: -46.6333},
  zoom: 8
	});
}

