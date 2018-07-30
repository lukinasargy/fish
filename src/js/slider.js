$(document).ready(function(){
	$('.slider').slick({
	  mobileFirst: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  swipeToSlide: true,
	  variableWidth:true,
	  arrows: true,
	  dots: false,
	  infinite: true,
	  responsive: [
	    {
	      breakpoint: 1920,
	      settings: {
	      	slidesToShow: 3,
	  		slidesToScroll: 1,
	  		dots:true,
	      }
	    }
	  ]
	});
});