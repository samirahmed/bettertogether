$(document).ready(function() {

	$('.toc-sidenav').affix({
	  offset: {
	    top: function () { return $(window).width() <= 980 ? 290 : 210 },
	    bottom: 70
	  }
	});

	$(".scroll").click(function(event){		
	    event.preventDefault();
	    $('html,body').animate({scrollTop:$(this.hash).offset().top }, 500);
	});

	$('.carousel').carousel({
	  interval: false
	});
});