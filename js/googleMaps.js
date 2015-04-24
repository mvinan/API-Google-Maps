(function (){
	var map;

      function initialize() {

        // Create an array of styles.
          var styles = [
            {
              stylers: [
                { hue: "#00ffe6" },
                { saturation: -20 }
              ]
            },{
              featureType: "road",
              elementType: "geometry",
              stylers: [
                { lightness: 100 },
                { visibility: "simplified" }
              ]
            },{
              featureType: "road",
              elementType: "labels",
              stylers: [
                { visibility: "off" }
              ]
            }
          ];


          // Creamos un nuevo objeto StyleMapType, pasando los estilos del array,
          // asi como el nombre que se mostrara en el control de tipo de mapa
        var styledMap = new google.maps.StyledMapType(styles,
              {name: "Styled Map"});

        // Crea el objeto del mapa e incluimos el MapTypeId a agregar.
        var mapOptions = {
          zoom: 18,
          center: new google.maps.LatLng(-3.993481,-79.198401),
          mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
          }

        };
        map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);

        // Asociar el style map con el MapTypeId y configuralo para mostrar.
        map.mapTypes.set('map_style', styledMap);
        map.setMapTypeId('map_style');

      }

      google.maps.event.addDomListener(window, 'load', initialize);
})();
