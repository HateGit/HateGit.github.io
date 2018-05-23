$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	loop:true,
    // nav:true,
    autoplay: 2000,
    responsive:{
        0:{
            items:1
      },
      360:{
            items:2
      },
    	700:{
    			items:3
    	}
    }
  });
});