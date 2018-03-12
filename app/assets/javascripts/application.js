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
//= require_tree .


$(document).ready(function() {
  // Global ajax cursor change
  $(document)
    .ajaxbeforeStart(function () {
        $('#maincontent').fadeOut(3000);
    })
    .ajaxStop(function () {
        alert('STOP');
    });
});

$(document).on('click', 'a', function(e) {
	e.preventDefault();
	//e.preventDefault().$('#maincontent').delay(3000).fadeOut(3000);
	//alert('0.PREVENT DEFAULT');
 	
 	//alert('1.HIDE FOOTER');
 	
 	//alert('2.HIDE MAIN');
  return window.history.pushState(null, "page title", this.href);
});
$(window).on('popstate', function(e) {
  e.preventDefault();
	
  return $.getScript(document.location);
});







