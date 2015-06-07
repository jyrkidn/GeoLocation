/* jshint devel:true */
// var watchID = navigator.geolocation.watchPosition(geo_success, errorCallback, geo_options);
geoFindMe();

function geoFindMe() {
	var output = document.getElementById("out"),
	    geo_options = {
		    enableHighAccuracy: true,
		    maximumAge        : 30000,
		    timeout           : 1
		};

	if (!navigator.geolocation){
		output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
		return;
	}

	function success(position) {
		var latitude  = position.coords.latitude;
		var longitude = position.coords.longitude;

		output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

		var img = new Image();
		img.src = "http://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=18&size=300x300&sensor=false";

		output.appendChild(img);
	};

	function error(err) {
		console.log(err);
		output.innerHTML = "Unable to retrieve your location";
	};

	output.innerHTML = "<p>Locating…</p>";

	navigator.geolocation.watchPosition(success, error, geo_options);
}
