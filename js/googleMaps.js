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

          var contentString = 
          '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
                '<div id="bodyContent">'+
                '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
                'sandstone rock formation in the southern part of the '+
                'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
                'south west of the nearest large town, Alice Springs; 450&#160;km '+
                '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
                'features of the Uluru - Kata Tjuta National Park. Uluru is '+
                'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
                'Aboriginal people of the area. It has many springs, waterholes, '+
                'rock caves and ancient paintings. Uluru is listed as a World '+
                'Heritage Site.</p>'+
                '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
                'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
                '(last visited June 22, 2009).</p>'+
                '</div>'+
                '</div>';

        var infowindow = new google.maps.InfoWindow({
              content: contentString
          });

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
        var svgDibujado = {
          path: 'M0.05-20.53c-3.89,0-7.05,3.16-7.05,7.05C-7-9.59,0.05-1,0.05-1
    S7.1-9.59,7.1-13.48C7.1-17.38,3.94-20.53,0.05-20.53z M0.05-11.28c-1.74,0-3.15-1.41-3.15-3.16c0-1.74,1.41-3.15,3.15-3.15c1.74,0,3.16,1.41,3.16,3.15C3.2-12.69,1.79-11.28,0.05-11.28z',
          fillColor: "#D4145A",
          fillOpacity: 1,
          scale: 3,
          strokeColor: "white",
          strokeWeight: 2
        };

        // Creando el marcador para el mapa
        var marker = new google.maps.Marker({
            position: ubicacion_sitio,
            icon: svgDibujado, /* aqui va el nombre de la variable del dibujo*/
            title:"Marker Title",
            draggable:true,
            animation: google.maps.Animation.BOUNCE,/*Se agrega la animacion aqui  DROP que cae al momento de crear el maker , BOUNCE que debe rebotar*/
            map:map
        });

        // Asociar el style map con el MapTypeId y configuralo para mostrar.
        map.mapTypes.set('map_style', styledMap);
        map.setMapTypeId('map_style');

        // llamamos a la marca
        marker.setMap(map);

        // llamamos al tooltip
        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
         });

      }

function toggleBounce() 
{

    if (marker.getAnimation() != null) 
    {
        marker.setAnimation(null);
    } 
    else 
    {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }

}

/********************************************************
*                    EVENTOS                            *
*********************************************************/
      
// Llamamos al mapa
google.maps.event.addDomListener(window, 'load', initialize);

})();
