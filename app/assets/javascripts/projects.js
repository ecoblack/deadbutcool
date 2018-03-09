$(function() {
		alert('DOM IS LOADED!');
		$(".img-responsive a").live("click", function() {
		$(."#footer").html("Page is loading")
		$.get(this.href, null, null, "script");
		return false;
	});
});


$('.img-responsive').click(function()
{
     $('.img-responsive').not(this, "#header").each(function()
     {
         $(this).animate({opacity: 0}, 1500);
     });
     $(this).delay( 1500 ).fadeOut(2000).$('.maincontent').load($(this).attr('href'));
      //load html from the url and put it in the #content element
    event.preventDefault(); // 
    
})

