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


// PROJECT GALLERY LINKS ANIMATION 
$(document).on('click', '.onhover', function(){
      var href = $(this).parents('.img-item').find('a').attr('href');

      // do animation
      $('.gallery').fadeOut( 1500, function(){
            // go to link when animation completes
            //$(this).fadeOut('fast');
            	
             window.location = href;
            // alert('gallery');
      })

      // over ride browser following link when clicked
      return false;
})
