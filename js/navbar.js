document.addEventListener('DOMContentLoaded', function () {
    console.log('ready1');
});

            
                
$.scrollTo(0);
$('.nav a').click(function() { $.scrollTo($(this).attr('href'), 500); });
  
<script src="dist/js/main.js"></script>

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