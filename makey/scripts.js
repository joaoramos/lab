$(document).ready(function() {

	// Key codes

	$(document).keydown(function(e){
		
		if (e.keyCode == 37) {
			hit('left');
			return false;
		}

		if (e.keyCode == 38) {
			hit('up');
			return false;
		}

		if (e.keyCode == 39) {
			hit('right');
			return false;
		}

		if (e.keyCode == 40) {
			hit('down');
			return false;
		}

		if (e.keyCode == 32 || e.keyCode == 65) {
			hit('a');
			return false;
		}

		if (e.keyCode == 66) {
			hit('b');
			return false;
		}

	});

	// 'B' is actually a click

	$(document).on('click', function() {
		hit('b');
		return false;
	});

	// Actions

	function hit(e) {
		// console.log(e);
		$('body').removeClass().addClass(e);
		$('h1').text(e);
		var sound = $('<embed autoplay="true" height="0" width="0" />');
		sound.attr('src', 'http://tts-api.com/tts.mp3?q='+e);
		$('body').append(sound);
	}
});