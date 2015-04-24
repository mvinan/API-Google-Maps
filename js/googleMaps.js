(function (){
	var map;

      function initialize() {
        var mapOptions = {
          zoom: 18,
          center: new google.maps.LatLng(-3.993481,-79.198401),
          mapTypeId: google.maps.MapTypeId.ROAD
        };
        map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
      }

      google.maps.event.addDomListener(window, 'load', initialize);
})();
