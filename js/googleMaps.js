(function (){
	var map;
    var lat = -3.993481;
    var lng = -79.198401;
    var ubicacion_sitio = new google.maps.LatLng(lat,lng);


      function initialize() {

        // Create an array of styles.
          var styles = [
            {
              stylers: [
                { hue: "#5394ff" },
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
            },{
                featureType:"all",
                elementType:"labels.text",
                stylers: [
                    { visibility:"on" },
                    {hue:"#ff3210"}
                ]
            },{
                featureType:"poi.park",
                elementType:"labels.icon",
                stylers: [
                    { visibility:"on" },
                    {hue:"#0bff43"}
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
              zoomControl:true,
              zoomControlOptions: {
                    style: google.maps.ZoomControlStyle.LARGE,
                    position: google.maps.ControlPosition.RIGHT_CENTER
                  },
              streetViewControl: false,
              center: ubicacion_sitio,
              mapTypeControl: false,
              overviewMapControl:false,
              scrollwheel: false,
              mapTypeControlOptions: {

                mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
              }

            };

        // Creamos el mapa 
        map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);

        /*******************************************************************
        *   Dibujando un Marcador Personalizado mediante SVG y agregandolo  
        *       - Agregandolo en una variable svgDibujado
        *       - creando el marcador para el mapa en una variable marker
        *       - llamamos a la marca hacia el mapa marker.setMap(map);
        *********************************************************************/

        // Dibujando un  Marcador Personalizado.
        /*var svgDibujado = {
          path: 'M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z',
          fillColor: "yellow",
          fillOpacity: 0.8,
          scale: 0.1,
          strokeColor: "gold",
          strokeWeight: 2
        }; */

        // Creando el marcador para el mapa
        var marker = new google.maps.Marker({
            position: ubicacion_sitio,
            // icon: svgDibujado, /* aqui va el nombre de la variable del dibujo*/
            title:"Marker Title",
            draggable:true,
            animation: google.maps.Animation.BOUNCE,/*Se agrega la animacion aqui  DROP que cae al momento de crear el maker , BOUNCE que debe rebotar*/
            map:map
        });

        // Asociar el style map con el MapTypeId y configuralo para mostrar.
        map.mapTypes.set('map_style', styledMap);
        map.setMapTypeId('map_style');

        // llamamos a la marka
        marker.setMap(map);

      }

      function toggleBounce() {

        if (marker.getAnimation() != null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
      }


      google.maps.event.addDomListener(window, 'load', initialize);
})();
