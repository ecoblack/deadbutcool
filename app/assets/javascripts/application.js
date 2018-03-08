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
//= require_tree .
function openNav() {
    document.getElementById("myNav").style.display = "block";
}

function closeNav() {
    document.getElementById("myNav").style.display = "none";
}


$('img').click(function()
{
     $('img').not(this, "#header").each(function()
     {
         $(this).animate({opacity: 0}, 1500);
     });
     $(this).delay( 1500 ).fadeOut(2000).$('.container').load($(this).attr('href'));
      //load html from the url and put it in the #content element
    event.preventDefault(); // 
    
})




//VIEW PROJECT CASE 

//$(document).ready(function(){
 //   $(document).ajaxSend(function(event, request, settings) {
  //      $('#loading-indicator').show();
  //  });
//
   // $(document).ajaxComplete(function(event, request, settings) {
   //     $('#loading-indicator').hide();
  //  });
//});

 $(document).on('click', 'a', function(e) {
    history.pushState({}, '', $(this).attr('href'));
  });

  $(window).bind('popstate', function () {
    $.get(document.location.href)
  });



  function historySupport() {
  return !!(window.history && window.history.pushState !== undefined);
}

function pushPageState(state, title, href) {
  if (historySupport()) {
    history.pushState(state, title, href);
  }
}

function replacePageState(state, title, href) {
  if (state == undefined) { state = null; }
  
  if (historySupport()) {
    history.replaceState(state, title, href);
  }
}

$(function() {
  window.onpopstate = function(e) {
    if ($('body').attr('data-state-href') === location.href) {
      return confirm("ONPOPSTATE");
      $('#maincontent').fadeOut(1000);
      return false;
    }
    
    if (e.state !== null) {
      // do something with your state object
    }
    
    $.ajax({
     beforeSend:function(){
     return confirm("Are you sure?");
},
      url: location.href,
      dataType: 'script',
      success: function(data, status, xhr) {
       return confirm("SUCCESS");
      },
      error: function(xhr, status, error) {
        // You may want to do something else depending on the stored state
        alert('Failed to load ' + location.href);
      },
      complete: function(xhr, status) {
        $('body').attr('data-state-href', location.href);
      }
    });
  };
  
  
  var getA = 'a[data-remote][data-method!="get"][data-method!="post"][data-method!="delete"]'
    , getForm = 'form[data-remote][method="get"]';
  
  function getState(el) {
    // insert your own code here to extract a relevant state object from an <a> or <form> tag
    // for example, if you rely on any other custom "data-" attributes to determine the link behaviour
    return {};
  };
  
  $('body').attr('data-state-href', location.href);
  
  $(getA).
    live('ajax:beforeSend', function(xhr) {
      pushPageState(getState(this), "Loading...", this.href);
      window.title = "Loading...";
    });

  $(getForm).
    live('ajax:beforeSend', function(xhr) {
      var href = $(this).attr("action") + "?" + $(this).serialize();
      
      pushPageState(getState(this), 'Loading...', href);
      window.title = "Loading...";
    });
    
  $(getA + ',' + getForm).
    live('ajax:complete', function(xhr) {
      $('body').attr('data-state-href', location.href);
      replacePageState(getState(this), window.title, location.href);
    });
});



$(document).ready(function(){
    $(document).ajaxSend(function(event, request, settings) {
        alert('SEND');
    });

    $(document).ajaxComplete(function(event, request, settings) {
        alert('COMPLETE');
    });
});