$(document).ready(function() {

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
		doStuff(position.coords.latitude, position.coords.longitude);
	  });
	}

	function doStuff(mylat, mylong) {
	  if ($('#location')) {
	    $('#location').html("<iframe frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" src=\"http://maps.google.com/?ll=" + mylat + "," + mylong + "&z=16&output=embed\"></iframe>");
		$.getJSON("http://maps.googleapis.com/maps/api/geocode/json?latlng="+mylat+","+mylong+"&sensor=true", function(data) {
	    	$('#address').text(data.results[0].formatted_address).delay(3000).fadeIn('slow');
	    });
	  }
	}

});