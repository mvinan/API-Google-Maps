(function (){

var map;
var lat = -3.993481;
var lng = -79.198401;
var ubicacion_sitio = new google.maps.LatLng(lat,lng);


function initialize() 
{
    // Create an array of styles.
    var styles = [
        {
            stylers: 
            [
                { hue: "#5394ff" },
                { saturation: -20 }
            ]
        },
        {
            featureType: "road",
            elementType: "geometry",
            stylers: 
            [
                { lightness: 100 },
                { visibility: "simplified" }
            ]
        },
        {
            featureType: "road",
            elementType: "labels",
            stylers: 
            [
                { visibility: "on" }
            ]
        },
        {
            featureType:"poi.business",
            elementType:"labels.text",
            stylers: 
            [
                { visibility:"off" },
                {hue:"#ff3210"}
            ]
        },
        {
            featureType:"poi.park",
            elementType:"labels.icon",
            stylers: 
            [
                { visibility:"on" },
                {hue:"#0bff43"}
            ]
        }
    ];

    // Creamos el contenido del ToolTip en cadena
    var contentString = 
    '<div id="toolTip">'+
        '<div id="toolTip-body">'+
            '<h1>NOMBRE DEL SITIO</h1>'+
            '<div class="bodyContent">'+
                '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum odio excepturi accusantium impedit vero sit voluptatibus sapiente eaque expedita adipisci aperiam qui, explicabo dolorum assumenda tempore maxime. Similique provident, dolore.</p>'+
           '</div>'+
        '</div>'+
    '</div>';

    // agregamos el contenido en cadena a la ventana de informacion tooltip
    var infowindow = new google.maps.InfoWindow({
          content: contentString
    });

    /* Creamos un nuevo objeto StyleMapType, pasando los estilos del array,
     asi como el nombre que se mostrara en el control de tipo de mapa */
    var styledMap = new google.maps.StyledMapType(styles,
        {name: "Styled Map"}
    );


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
        mapOptions
    );

    /*******************************************************************
    *   Dibujando un Marcador Personalizado mediante SVG y agregandolo  
    *       - Agregandolo en una variable svgDibujado
    *       - creando el marcador para el mapa en una variable marker
    *       - llamamos a la marca hacia el mapa marker.setMap(map);
    *********************************************************************/

    // Dibujando un  Marcador Personalizado.
    var svgDibujado = {
        path: 'M0.05-20.53c-3.89,0-7.05,3.16-7.05,7.05C-7-9.59,0.05-1,0.05-1S7.1-9.59,7.1-13.48C7.1-17.38,3.94-20.53,0.05-20.53z M0.05-11.28c-1.74,0-3.15-1.41-3.15-3.16c0-1.74,1.41-3.15,3.15-3.15c1.74,0,3.16,1.41,3.16,3.15C3.2-12.69,1.79-11.28,0.05-11.28z',
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

    // llamamos al TOOLTIP
    google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
        }
    );
} /*<<-----  Cierra la funcion Initialize ----->>*/

// Animacion de bounce para ser llamada a cualquier evento que queremos
// function toggleBounce() 
// {
//     if (marker.getAnimation() != null) 
//     {
//         marker.setAnimation(null);
//     } 
//     else 
//     {
//         marker.setAnimation(google.maps.Animation.BOUNCE);
//     }
// }

/********************************************************
*                    LLAMADA AL MAPA                    *
*********************************************************/
      
// Llamamos al mapa
google.maps.event.addDomListener(window, 'load', initialize);


/*
AQUI cierra la function autollamada
*/
})();
