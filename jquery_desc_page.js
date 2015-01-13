$(document).ready(function(){
	$('.navigation a #navtext').fadeTo(0, 0.33);
	
	$('.navigation a #navtext').mouseenter(function(){
		$(this).stop().fadeTo(600, 1);
	})
	$('.navigation a #navtext').mouseleave(function(){
		$(this).stop().fadeTo(300, 0.33);
	})
});
