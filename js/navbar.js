$(document).ready(function() {
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