//This script resizes the container of the video, hides text and shows 'VIEW PROJECT CASE' + 'CLOSE' buttons

$(document).ready(function () {
    var executeAnimationLogo = function(callback) {
        
        if ($("#logo").hasClass("X")) {
            
            $("#curtain").animate({
                height: ["75%", "linear"]

            }, 1000, function () {
                $("#logo").removeClass("X");
                $("#logo").addClass('Y');
                if(!!callback) callback();
            });

            $('.static').delay(1500).fadeIn('slow');
			
            
        } else if ($("#logo").hasClass("Y")) {
           

            $("#curtain").animate({
                height: ["0", "linear"]
            }, 1000, function () {
                $("#logo").removeClass("Y");
                $("#logo").addClass('X');
                if(!!callback) callback(); 
            });

           $('.static').fadeOut('fast');
           
        }
    }

    //$("iframe").click(function () {
    //    executeAnimationLogo();
   // });
 
    
    
})





// if visible iframe visible
// 1. change id of iframe
// 2. unload prev iframe
// 3. autoplay iframe
// 4. 

    $(document).on('click', '.static', function(e) {
       $('.static').animate({opacity: 0},'2000', function(){
             $("#curtain").slideToggle(2555);
           // alert("The paragraph is now hidden");
        });
    });
