
/*
$(document).on('click', '.img-item a', function(e) {
	e.preventDefault();
                  AlertSave();
});
    

function AlertSave() {

  $("#deskmenu").delay(1000).fadeOut('slow');
   $("#maincontent, #footer").fadeOut(1000);
   $(".home_img").delay(2000).fadeOut('slow').delay(5000).$('#maincontent').show();
   $(".modal").delay(1000).fadeIn('slow');

}


$(document).on('click', '.project-link', function(e){
  e.preventDefault();
  
});
*/
$('.bxslider').bxSlider();








//Replace next/prev with images of next/prev

$(document).on('click', '.bottom-left', function(event) { 
    event.preventDefault(); 
    $(".bx-prev").click(); 
});

$(document).on('click', '.bottom-right', function(event) { 
    event.preventDefault(); 
    $(".bx-next").click(); 
});
