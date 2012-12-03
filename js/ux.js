$(document).ready(function() {
	$('.toc').scrollspy();
	$('#navbar').scrollspy();

	$('.toc-sidenav').affix({
	  offset: {
	    top: function () { return $(window).width() <= 980 ? 290 : 210 },
	    bottom: 270
	  }
	});

	$(".scroll").click(function(event){		
	    event.preventDefault();
	    $('html,body').animate({scrollTop:$(this.hash).offset().top - 25}, 500);
	});
});