// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require projects
//= require pages
//= require overlay
//= require_tree .



 //$(function(){
  //   $('.pagination a').attr('data-remote', 'true')
  // });
//Browser history 
//$( document ).ajaxSend(function( event, request, settings ) {
 
//});

//jQuery Simple Modal Example




$(document).on('click', 'a', function(e) {

  e.preventDefault();

  return window.history.pushState(null, "page title", this.href);
});
$(window).on('popstate', function(e) {

  e.preventDefault();
  
  return $.getScript(document.location);
});


//VIDEO ON HOMEPAGE


$(document).on('click', '.home_img', function(e) {
                  AlertSave();
});
    

function AlertSave() {

  $("#deskmenu").delay(1000).fadeOut('slow');
   $("#maincontent, #footer").fadeOut(1000);
   $(".home_img").delay(2000).fadeOut('slow').delay(5000).$('#fullscreenvideo').show();
   $(".modal").delay(1000).fadeIn('slow');

}




