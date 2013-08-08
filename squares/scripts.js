$(document).ready(function() {

	bonsai.run(document.getElementById('s3'), {
		code: function() {
			new Rect(0, 0, 250, 250)
			.addTo(stage)
			.attr('fillColor', 'rgba(229,130,0,1)');
		},
		width: 280,
		height: 280
	});

});