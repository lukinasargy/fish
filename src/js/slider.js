$(document).ready(function(){
	$('.slider').slick({
	  mobileFirst: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  centerMode: true,
	  swipeToSlide: true,
	  variableWidth:true,
	  arrows: true,
	  dots: false,
	  infinite: true,
	  responsive: [
	    {
	      breakpoint: 1910,
	      settings: {
	      	centerMode: false,
	      	slidesToShow: 3,
	  		slidesToScroll: 1,
	  		scrollbar:true,
	  		arrows:false,
	      }
	    }
	  ]
	});
});