
/*
$(document).on('click', '.img-item a', function(e) {
	e.preventDefault();
                  AlertSave();
});
    

function AlertSave() {

  $("#deskmenu").delay(1000).fadeOut('slow');
   $("#maincontent, #footer").fadeOut(1000);
   $(".home_img").delay(2000).fadeOut('slow').delay(5000).$('#maincontent').show();
   $(".modal").delay(1000).fadeIn('slow');

}


$(document).on('click', '.project-link', function(e){
  e.preventDefault();
  
});
*/
$('.bxslider').bxSlider();


$(document).on('click', '#playpause', function(){
    
    
    if(video_state == 'paused') {
                        vid.vimeo("play");
                        video_state = 'playing';

                    } else {
                      alert("success");
                        vid.vimeo("pause");
                        video_state = 'paused';

                    }
});




$("#myvideo").on("finish", function(){
  $(".bx-next").click(); 
});

//Replace next/prev with images of next/prev

$(document).on('click', '.bottom-left', function(event) { 
    event.preventDefault(); 
    $(".bx-prev").click(); 
});

$(document).on('click', '.bottom-right', function(event) { 
    event.preventDefault(); 
    $(".bx-next").click(); 
});




        /* Vimeo Player */
        var vid = $('#thevideo'), 
            video_length = 0, 
            video_state = 'paused',
            $pauseplay = $("#playpause");
            $setvolume = $(".set-volume");
        
 //           vid.vimeo("setVolume", 1)
 //              .vimeo("getDuration", function(data){
 //                   video_length = data;
 //                   console.log("Length "+ video_length);
 //               })
                //NEXT SLIDE IF VIDEO FINISHED
                vid.on("finish", function(event){
 
                    $(".bx-next").click();
                });

                vid.on("play", function(e){
                    console.log("play event was triggered");
                })
                .on("pause", function(e){
                    console.log("pause event was triggered");
                })
                .on("playProgress", function(event, data){
                    console.log(data);
                })
                .on("finish", function(e){
                    //vid.vimeo("unload");
                    console.log("Finished event was triggered");
                });

                // Play / Pause
                $pauseplay.on('click', function(){

                    if(video_state == 'paused') {
                        vid.vimeo("play");
                        video_state = 'playing';

                    } else {
                        vid.vimeo("pause");
                        video_state = 'paused';

                    }
                });
                //MUTE
                window.addEventListener('load', function() {
            //Attach the ready event to the iframe
            $f(document.getElementById('player')).addEvent('ready', ready);
        });
                 // Play / Pause
                $pauseplay.on('click', function(){

                    if(video_state == 'paused') {
                        vid.vimeo("setVolume", 0.5);

                    } else {
                        vid.vimeo("setVolume", 0);

                    }
                });


