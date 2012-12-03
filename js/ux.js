$(document).ready(function() {
	var isResume = /resume/.test(window.location.pathname);

	$('.toc').scrollspy();
	$('#navbar').scrollspy();

	$('.toc-sidenav').affix({
	  offset: {
	    top: function () { return $(window).width() <= 980 ? 290 : 210 },
	    bottom: 70
	  }
	});

	$(".scroll").click(function(event){		
	    event.preventDefault();
	    $('html,body').animate({scrollTop:$(this.hash).offset().top - (isResume ? 25 : 0) }, 500);
	});
});