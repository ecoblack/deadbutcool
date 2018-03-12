//header responds to scroll
$(window).scroll(function(e){ 
              var $el = $('#header'); 

              if ($(this).scrollTop() > 200){ 
 				$('#header').fadeOut(2500); 
              }
              if ($(this).scrollTop() < 200)
              {
 				$('#header').fadeIn(1500); 
              } 
});     