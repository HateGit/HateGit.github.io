$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	loop:true,
    // nav:true,
    autoplay: 2000,
    responsive:{
        0:{
            items:1
        },
      	700:{
      			items:3
      	}
    }
  });
});