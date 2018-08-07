$(document).ready(function(){
  $(".modal__title").hover(
  function(){
    $( this ).addClass( "modal__title--hover" );
  }, 
  function(){
    $( this ).removeClass( "modal__title--hover" );
  }
);
});
