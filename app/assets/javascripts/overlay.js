//NAVIGATION MENU

$(document).on('click', '.youtube', function(e) {
  window.open('http://www.youtube.com/', '_blank');
});

$(document).on('click', '.facebook', function(e) {
  window.open('http://www.facebook.com/', '_blank');
});

$(document).on('click', '.soundcloud', function(e) {
  window.open('http://www.soundcloud.com/', '_blank'); 
});


// fadeout overlay menu
$(document).on('click', '.overlay a', function(){
      var href = $(this).attr('href');
      
      // do animation
      $('.overlay').fadeOut( 500, function(){
            // go to link when animation completes
            //window.location=href;
               $("html").removeClass("modal-open");
    			$('#myNav').fadeOut();
   				 $("#menu").text("MENU");
      })

      // over ride browser following link when clicked
      return false;
})


