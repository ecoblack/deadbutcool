# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/


$('img').click(function()
{
     $('img').not(this, "#header").each(function()
     {
         $(this).animate({opacity: 0}, 1500);
     });
     $(this).delay( 1500 ).fadeOut(2000).$('.container').load($(this).attr('href'));
      //load html from the url and put it in the #content element
    event.preventDefault(); // 
    
});