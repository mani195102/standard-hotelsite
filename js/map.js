function initMap() {
  var styledMapType = new google.maps.StyledMapType(
[
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#263c3f"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6b9a76"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#38414e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#212a37"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9ca5b3"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#1f2835"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#f3d19c"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2f3948"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#515c6d"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  }
],
      {name: 'Styled Map'});
  var broadway = {
    info:
      '<strong>3652 Rosewellrd , NE</strong><br>\
    	  Atlanta,GA 30305<br>\
    	<a href="https://www.google.com/maps/place/3652+Roswell+Rd+NE,+Atlanta,+GA+30305,+USA/@33.8540256,-84.3852284,17z/data=!3m1!4b1!4m5!3m4!1s0x88f50f6466f29d51:0x33e231b49347c389!8m2!3d33.8540256!4d-84.3830397">Get Directions</a>',
    lat: 33.854180,
    long: -84.383040,
  }

  var belmont = {
    info:
      '<strong>60 Luckie St NW,</strong><br>\
    	 Atlanta,GA 30303<br>\
    	<a href="https://www.google.com/maps/place/Helen+M.+Aderhold,+60+Luckie+St+NW,+Atlanta,+GA+30303,+USA/data=!4m2!3m1!1s0x88f503871a9282f5:0x5c676d775ce1e0e4?sa=X&ved=2ahUKEwiLxvKrjajnAhVSyzgGHZK3Db4Q8gEwAHoECAsQAQ">Get Directions</a>',
    lat: 33.756340,
    long:-84.389153,
  }


  var locations = [
    [broadway.info, broadway.lat, broadway.long, 0],
    [belmont.info, belmont.lat, belmont.long, 1],
  ]

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    // center: new google.maps.LatLng(33.718210, -84.669080),
      center: {lat: 33.854180, lng: -84.383040},
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  })

  var infowindow = new google.maps.InfoWindow({})

  var marker, i

  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map,
    })

    google.maps.event.addListener(
      marker,
      'click',
      (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0])
          infowindow.open(map, marker)
        }
      })(marker, i)
    )
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');
  }
}
