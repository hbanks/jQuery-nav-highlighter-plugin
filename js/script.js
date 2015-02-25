$(function() {
	

	// $('a[href*=#]').on('click', function(e) {
	// 	e.preventDefault();
		
	// 	$('html,body').animate({
	// 	  scrollTop: $(this).offset().top
	// 	}, 900);
	// });

	$('a[href*=#]:not([href=#])').click(function() {
	  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	    var target = $(this.hash);
	    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	    if (target.length) {
	      $('html,body').animate({
	        scrollTop: target.offset().top
	      }, 1000);
	      return false;
	    }
	  }
	}); // code courtesy of CSS-Tricks

	$(window).scroll(function (){
		console.log('#id');
	});

});