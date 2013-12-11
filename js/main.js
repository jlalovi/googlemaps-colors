// Colors: http://goo.gl/7ttWR6
// Tutorials:
// https://developers.google.com/maps/documentation/javascript/tutorial
// https://developers.google.com/maps/documentation/javascript/styling

$(document).ready(function(){
	function initialize() {	        

	        var styles = [
			  {
			    "featureType": "water",
			    "elementType": "geometry",
			    "stylers": [
			      { "visibility": "on" },
			      { "color": "#1e4147" },
			      { "lightness": 50 }
			    ]
			  },{
			    "featureType": "poi.park",
			    "elementType": "geometry.fill",
			    "stylers": [
			      { "visibility": "on" },
			      { "color": "#437356" },
			      { "lightness": 50 }
			    ]
			  },{
			    "featureType": "landscape.man_made",
			    "elementType": "geometry.fill",
			    "stylers": [
			      { "visibility": "on" },
			      { "color": "#fae3b4" },
			      { "lightness": 50 }
			    ]
			  },{
			    "featureType": "road.highway",
			    "elementType": "geometry.fill",
			    "stylers": [
			      { "visibility": "on" },
			      { "color": "#f34a53" },
			      { "lightness": 50 }
			    ]
			  },{
			    "featureType": "road.local",
			    "elementType": "geometry.fill",
			    "stylers": [
			      { "visibility": "on" },
			      { "color": "#aac789" },
			      { "lightness": 50 }
			    ]
			  },{
			  }
			];

	        var mapOptions = {
	          center: new google.maps.LatLng(52.370, 4.895),
	          zoom: 15,
	          styles: styles //with this option, I am applying the var styles changes from the default of google maps.
	        };
	        var map = new google.maps.Map(document.getElementById("map-canvas"),
	            mapOptions);
	      	}

	google.maps.event.addDomListener(window, 'load', initialize);	
});
