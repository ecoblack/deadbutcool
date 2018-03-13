// header responds to scroll
$(window).scroll(function(e){ 
              var $el = $('#header'); 

              if ($(this).scrollTop() > 200){ 
 				$('#header').fadeOut(1500); 
              }
              if ($(this).scrollTop() < 200)
              {
 				$('#header').fadeIn(1500); 
              } 
});     

// Overlay nav menu

$(document).ready(function(){
    $("#menu").click(function(){
        $(".overlay-content").hide();
        if (typeof jQuery != 'undefined') {  
    // jQuery is loaded => print the version
    alert(jQuery.fn.jquery);
}
    });
});