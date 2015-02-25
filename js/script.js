$(function() {

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

	// apply the class of nav-active to the current nav link
	$('a').on('click', function(e) {
		e.preventDefault();
		$('li.nav-active').removeClass('nav-active');
		$(this).parent('li').addClass('nav-active');
	});


	// get an array of 'href' of each a tag

	var navLink = $('ul.nav a');
	console.log(navLink);
	var aArray = [];

	for(var i = 0; i < navLink.length; i++) {
		console.log(i);
		var aChild = navLink[i];
		var navArray = $(aChild).attr('href');
		console.log(navArray);
		aArray.push(navArray);
		console.log(aArray);
	}
	

	$(window).scroll(function (){
		
	});

});