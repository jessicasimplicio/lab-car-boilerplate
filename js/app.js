var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: -23.55052, lng: -46.6333},
  zoom: 8
	});
}