const activeMenu = () => {
  const openMenuButton = document.getElementById('open-menu-button')
  const closeMenuButton = document.getElementById('close-menu-button')
  const mainMenu = document.getElementById('main-menu')
  if (openMenuButton && mainMenu && closeMenuButton) {
    openMenuButton.addEventListener('click', () => {
      mainMenu.classList.add('active')
    })
    closeMenuButton.addEventListener('click', () => {
      mainMenu.classList.remove('active')
    })
  }
}
activeMenu()

  // Creacion de mapa interactivo
function initMap() {
   // Coordenadas centrales de Cundinamarca
  var cundinamarcaCenter = {lat: 4.6500, lng: -74.0833};

  // Coordenadas centrales de Boyacá
 var boyacaCenter = {lat: 5.7500, lng: -73.5000};

  // Crear el mapa
  var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
     center: cundinamarcaCenter
 });






  // Marcadores de Cundinamarca
  var cundinamarcaMarkers = [
      {
          position: {lat: 4.7, lng: -74.1},
          title: 'Flor Girasol',
          image: 'images/flora5.jpeg',
          description: 'Epidendrum oxysepalum'
      },
      {
          position: {lat: 4.6, lng: -74.2},
          title: 'Flor Morada',
          image: 'images/flora6.jpeg',
          description: 'Género Epidendrum'
      },
      {
          position: {lat: 4.5, lng: -74.2},
          title: 'Flor Trebol',
          image: 'images/flora7.jpg',
          description: 'Maxillaria graminifolia'
      },
      {
          position: {lat: 4.4, lng: -74.2},
          title: 'Serpiente Verde',
          image: 'images/serp1.jpeg',
          description: 'cuspidifolia'
      },
      {
          position: {lat: 4.3, lng: -74.2},
          title: 'Coral',
          image: 'images/serp2.jpeg',
          description: 'Coral'
      },
      {
          position: {lat: 4.6, lng: -74.4},
          title: 'Jueteadora',
          image: 'images/serp3.jpg',
          description: 'serpenticies'
      },
      {
          position: {lat: 4.6, lng: -74.5},
          title: 'Pajaro azul y Amarillo',
          image: 'images/ave6.jpeg',
          description: 'cerillues'
      },
      {
          position: {lat: 4.6, lng: -74.7},
          title: 'Pajaros',
          image: 'images/ave7.jpeg',
          description: 'Ballicius'
      },
  ];

// Agregar marcadores de Cundinamarca al mapa
cundinamarcaMarkers.forEach(function(marker) {
    var infoWindowContent = '<div style="text-align: center; padding: 5px;">' + // Ajusta aquí el padding según sea necesario
        '<h2>' + marker.title + '</h2>' +
        '<div style="display: flex; justify-content: center;">' +
            '<img src="' + marker.image + '" alt="' + marker.title + '" style="width:150px;height:90px;">' +
        '</div>' +
        '<h3>' + marker.description + '</h3>' +
        '</div>';

      var newMarker = new google.maps.Marker({
          position: marker.position,
          map: map,
          title: marker.title
      });

      var infoWindow = new google.maps.InfoWindow({
          content: infoWindowContent
      });

      newMarker.addListener('click', function() {
          infoWindow.open(map, newMarker);
      });
  });

  // Marcadores de Boyacá
  var boyacaMarkers = [
      {
          position: {lat: 5.8, lng: -73.6},
          title: 'Flores Amarillas',
          image: 'images/flora1.jpg',
          description: 'Bellicius'
      },
      {
          position: {lat: 5.7, lng: -73.4},
          title: 'Flor White',
          image: 'images/flora2.jpeg',
          description: 'Bellicius'
      },
      {
          position: {lat: 5.7, lng: -73.7},
          title: 'Flor Rosada',
          image: 'images/flora3.jpeg',
          description: 'Bellicius'
      },
      {
          position: {lat: 5.7, lng: -73.2},
          title: 'Flor Amarilla y Morada',
          image: 'images/flora4.jpeg',
          description: 'Bellicius'
      },
      {
          position: {lat: 5.8, lng: -73.5},
          title: 'Colibri',
          image: 'images/ave1.jpeg',
          description: 'Colibrious'
      },
      {
          position: {lat: 5.7, lng: -73.8},
          title: 'Garza',
          image: 'images/ave2.jpeg',
          description: 'Garza'
      },
      {
          position: {lat: 5.7, lng: -73.9},
          title: 'Gorrion',
          image: 'images/ave3.jpeg',
          description: 'Gorrionus'
      },
  ];

  // Agregar marcadores de Boyacá al mapa
  boyacaMarkers.forEach(function(marker) {
      var infoWindowContent = '<div style="text-align: center; padding-top: -3px;">' +
          '<h2>' + marker.title + '</h2>' +
          '<div style="display: flex; justify-content: center;">' +
              '<img src="' + marker.image + '" alt="' + marker.title + '" style="width:150px;height:90px; padding-top: -3px;">' +
          '</div>' +
           '<h3>' + marker.description + '</h3>' +
          '</div>';

      var newMarker = new google.maps.Marker({
          position: marker.position,
          map: map,
          title: marker.title
      });

      var infoWindow = new google.maps.InfoWindow({
          content: infoWindowContent
      });

      newMarker.addListener('click', function() {
          infoWindow.open(map, newMarker);
      });
  });
}