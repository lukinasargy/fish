$(document).ready(function(){
	$(".menu__item").on("click", function(event){
    	event.preventDefault()
    	$(".modal").show();
    	
    });
    $(".modal__close").on("click", function(event){
    	event.preventDefault()
    	$(".modal").hide();
  		});
    $(".modal").on("click",function(event){
      if($(event.target).hasClass("modal")){
         $(this).closest(".modal").hide();
      }
    });
});