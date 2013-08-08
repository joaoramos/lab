$(document).ready(function() {

	$('input').focus();

	$('form').on('submit', function(e) {
		say($('input').val());
		return false;
	});

	// Actions

	function say(e) {
		// console.log(e);
		var sound = $('<embed autoplay="true" height="0" width="0" />');
		if (e=='fuck you') {
			sound.attr('src', 'http://tts-api.com/tts.mp3?q=ok, I\'ll just go fuck myself');
		} else {
			sound.attr('src', 'http://tts-api.com/tts.mp3?q='+e);
			setTimeout(function(){
				sound.attr('src', 'http://translate.google.com/translate_tts?ie=UTF-8&q='+e+'&tl=fr');
				console.log('http://translate.google.com/translate_tts?ie=UTF-8&q='+e+'&tl=fr');
			},3000);
		}

		$('body').append(sound);
	}
});