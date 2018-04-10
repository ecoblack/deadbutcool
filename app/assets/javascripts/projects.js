

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
