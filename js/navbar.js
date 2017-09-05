$(document).ready(function() {
	$.scrollTo(0);
	$('.nav a').click(function() { $.scrollTo($(this).attr('href'), 500); });

	var NavY = $('.rectangle').offset().top;
    
	var stickyNav = function(){
		var ScrollY = $(window).scrollTop();
			
		if (ScrollY > NavY) { 
			$('.rectangle').addClass('sticky');
		} else {
			$('.rectangle').removeClass('sticky'); 
		}
	};
	 
	stickyNav();
	 
	$(window).scroll(function() {
 		stickyNav();
	});
});