//


$('.img-responsive').click(function()
{
     $('.img-responsive').not(this, "#header").each(function()
     {
         $(this).animate({opacity: 0}, 1500);
     });
     $(this).delay( 1500 ).fadeOut(2000).$('.container').load($(this).attr('href'));
      //load html from the url and put it in the #content element
    event.preventDefault(); 
});

