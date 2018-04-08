// header responds to scroll
$(window).scroll(function(e){ 
              var $el = $('#header'); 

              if ($(this).scrollTop() > 120){ 
 				$('#header').fadeOut(1115); 
              }
              if ($(this).scrollTop() < 120)
              {
 				$('#header').fadeIn(1111); 
              } 
});     

//this makes the current link containing li of class "active"

