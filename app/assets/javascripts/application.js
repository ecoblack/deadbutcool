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
//= require jquery3
//= require jquery_ujs
//= require jquery.vimeo.api.min.js
//= require jquery.bxslider.min.js
//= require active_admin/base
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


// P L A Y E R  O N   H O M E   P A G E

