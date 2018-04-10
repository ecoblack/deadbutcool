
    $(document).on('click', '.bx-viewport', function(e) {
       $('.static').animate({opacity: 0},'2000', function(){
             $("#curtain").slideToggle(2555);
          

           // Hide it but only if not hidden - hide
            $('.nav:visible').hide();

    // Later in the script - Show it but only If it's not visible.  
           $('#closebtn:hidden').show();


        });
    });


    $(document).on('click', '#closebtn', function(e) {
       $('.static').animate({opacity: 1},'2000', function(){
        $("#curtain").slideToggle(2555);
        $('#closebtn:visible').hide();
        $('.nav:hidden').show();

     });
    });
