(function (){

  // var API_MAPS_KEY = "AIzaSyA7nSWoLc22iPe3Gs-O8BAqs9TZs4RVOJU";
  // var API_MAPS_URL = "https://maps.googleapis.com/maps/api/js"+"?"+API_MAPS_KEY;

  // $.getJSON(API_MAPS_URL);

	var map;

      function initialize() {
        var mapOptions = {
          zoom: 8,
          center: new google.maps.LatLng(-34.397, 150.644)
        };
        map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
      }

      google.maps.event.addDomListener(window, 'load', initialize);
})();
