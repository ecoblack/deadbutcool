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
//= require header
//= require home
//= require overlay
//= require_tree .


//BROWSER HISTORY
$(document).on('click', 'a', function(e) {
    e.preventDefault();
    
    
  return window.history.pushState(null, "page title", this.href);
});
//BROWSER HISTORY BACK
$(window).on('popstate', function(e) {

  e.preventDefault();
  
  return $.getScript(document.location);
});




//Replace next/prev with images of next/prev

  $(document).on('click', '.bottom-left', function(event) { 
    event.preventDefault(); 
    $(".previous_page").click(); 
});

  $(document).on('click', '.bottom-right', function(event) { 
    event.preventDefault(); 
    $(".next_page").click(); 
});


$(".bottom-left").click(function() {
    $('html, body').animate({
        scrollTop: $("iframe").offset().top
    }, 1000);
});


//VIDEO SLIDE CONTROLS
$(document).ready(function($) {
  $("iframe").vimeo("setVolume", 0);
$( ".play" ).click(function() {
  $("iframe").vimeo("play");
});

$( "#pause" ).click(function() {
  $("iframe").vimeo("pause");
});

$( ".set-volume" ).click(function() {
  $("iframe").vimeo("setVolume", 0);
});
});

//function myfunction(callback) {
 // something


//.trigger( eventType [, extraParameters ] )

//$("#element").on("click", function(e, callback){
//   callback();
//}
//var callback = function(){alert("Hello");}
//$("#element").trigger("customCall",[callback]);



$(document).on('click', '.project-link', function(e){
  e.preventDefault();
  $('body').fadeOut();
  alert('yo');
});