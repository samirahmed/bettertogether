$(document).ready(function() {

	$('.toc-sidenav').affix({
	  offset: {
	    top: function () { return $(window).width() <= 980 ? 290 : 210 },
	    bottom: 70
	  }
	});

	$(".scroll").click(function(event){		
	    event.preventDefault();
	    var hash = $(this.hash).attr("id");
	    $('html,body').animate({scrollTop:$(this.hash).offset().top }, 500, function() {
			window.location.hash = hash;
	    });
	});

	$('.carousel').carousel({
	  interval: false
	});
});