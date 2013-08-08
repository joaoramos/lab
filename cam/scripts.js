$(document).ready(function() {

	// Put event listeners into place
	window.addEventListener("DOMContentLoaded", function() {
		// Grab elements, create settings, etc.
		var s1 = document.getElementById("s1"),
			context1 = s1.getContext("2d"),
			s2 = document.getElementById("s2"),
			context2 = s2.getContext("2d"),
			s3 = document.getElementById("s3"),
			context3 = s3.getContext("2d"),
			video = document.getElementById("video"),
			videoObj = { "video": true },
			errBack = function(error) {
				console.log("Video capture error: ", error.code); 
			};

		// Put video listeners into place
		if(navigator.getUserMedia) { // Standard
			navigator.getUserMedia(videoObj, function(stream) {
				video.src = stream;
				video.play();
			}, errBack);
		} else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
			navigator.webkitGetUserMedia(videoObj, function(stream){
				video.src = window.webkitURL.createObjectURL(stream);
				video.play();
			}, errBack);
		}

		// Trigger photo take
		var take = 1;
		$(document).on("click", function() {
			switch(take) {
				case 1:
					context1.drawImage(video, 0, 0, 640, 480);
					break;
				case 2:
					context2.drawImage(video, 0, 0, 640, 480);
					break;
				case 3:
					context3.drawImage(video, 0, 0, 640, 480);
					break;
			}
			take++;
		});	

	}, false);

});