// header responds to scroll
$(window).scroll(function(e){ 
              var $el = $('#header'); 

              if ($(this).scrollTop() > 150){ 
 				$('#header').fadeOut(1115); 
              }
              if ($(this).scrollTop() < 150)
              {
 				$('#header').fadeIn(1111); 
              } 
});     

//toggle overlay menu



//underline active menu
