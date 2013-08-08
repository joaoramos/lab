$(document).ready(function() {

	function iframeRef(frameRef) {
	    return frameRef.contentWindow ? frameRef.contentWindow.document : frameRef.contentDocument
	}

	var inside = iframeRef(document.querySelector('#endomondo'));
	console.log(inside);
	
});