$(function(){
    
     $('figure').click( function(){
		 $('.overlay').show();
	     $('.container').addClass('blur');
		 $('.overlay').addClass("animated zoomIn");
	     $('.video').addClass("animated fadeInDownBig");
	 
	 });
	 
	 $('.close').click(function(){
	    $('.overlay').removeClass("animated zoomIn");
	    $('.video').removeClass("animated fadeInDownBig");
	    $('.overlay').hide(1000);
	    $('.container').removeClass('blur');
		 
	 
	 });

 });