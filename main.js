$(document).ready(function(){
  $('#mob-icon-open-menu').on("click", function(){
    if ($('#mob-menu-left').hasClass("closed")) {
      console.log('fermé > open'); 
      $('#mob-menu-left').removeClass("closed")
    } else {
      console.log('open > fermé'); 
      $('#mob-menu-left').addClass("closed")
    }
   });
}); 