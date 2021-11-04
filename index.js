document.addEventListener('DOMContentLoaded', function() {
  var flag1=true;
  var flag = true;
  const btn = document.querySelector('.soundBtnMain-js');
  console.log(btn)
  const btnPlay = document.querySelector('.playBtnMain-js');
   //const overlayBtn = document.querySelector('.Overlay__btn');
   
   //const overlayAll = document.querySelector('.custom-video__overlay');
   const customVideoElement = document.querySelector('.custom-video__element');
   var iframe = document.querySelector('#customVideoPlayerDesktop');
   var desktopPlayer = new  Vimeo.Player(iframe);
//    overlayBtn.addEventListener('click', function() {
//        overlayAll.classList.add('active');
//        customVideoElement.classList.add('active');
//        flag1=!flag1;
//        btnPlay.classList.add('active');
//        btnPlay.style.zIndex = "1000";

//        btn.style.zIndex = "1000";

//        desktopPlayer.ready().then(function() {
//                 desktopPlayer.play()
//                     console.log('Playing entry video');
//                 }).catch(function(error) {
//                    console.log(error)
//                 });
//    })
    //Indeces for slides with videos
    // let videoIndex1 = 1;
    // let videoIndex = 13;
  
  
       
       
// btn.addEventListener('click', function(e){

//     if(flag) {
//         flag=!flag;
//         desktopPlayer.setMuted(true).then(function() {
//             btn.classList.remove('custom-video__mute-btn--off')
//             btn.classList.add('custom-video__mute-btn--on')
//         }).catch(function(error) {
//             console.log(error)
//         });
//     }
//     else {
//         flag=!flag;
//         desktopPlayer.setMuted(false).then(function() {
//             btn.classList.remove('custom-video__mute-btn--on')
//             btn.classList.add('custom-video__mute-btn--off')
//         }).catch(function(error) {
//             console.log(error)
//         });
//     }
// })
        
        // btnPlay.addEventListener('click', function(e) {
        //         e.stopPropagation();
        //       console.log('button clicked')
        //        //video paused
        //        if(flag1) {
        //         flag1=!flag1;
        //         btnPlay.classList.add('active')
        //         //document.body.classList.add('videoPlaying')
        //         desktopPlayer.play().then(function() {
        //             console.log('Playing entry video');
        //         }).catch(function(error) {
        //            console.log(error)
        //         });
        //     }//video is playing
        //     else {
        //         console.log('removing active clkass')
        //         flag1=!flag1;
        //         btnPlay.classList.remove('active');
        //         desktopPlayer.pause()  
        //     }
        // })
        // desktopPlayer.on('ended', function() {
        //    console.log('Ended playing Main ENtry video')
         
        // }) 
    

      var iframe1 = document.querySelector('#customSliderVideo1');
       window.iframePlayer1 = new Vimeo.Player(iframe1);
    //     const btn = document.querySelector('.soundBtnMain-js');
      const btnPlay1 = document.querySelector('.playBtnMainLens-js');
    //     let flag = true;
    //     btn.addEventListener('click', function(){
            
    //         if(flag) {
    //             flag=!flag;
    //             iframePlayer1.setMuted(true).then(function() {
    //                 btn.classList.remove('custom-video__mute-btn--off')
    //                 btn.classList.add('custom-video__mute-btn--on')
    //             }).catch(function(error) {
    //                 console.log(error)
    //             });
    //         }
    //         else {
    //             flag=!flag;
    //             iframePlayer1.setMuted(false).then(function() {
    //                 btn.classList.remove('custom-video__mute-btn--on')
    //                 btn.classList.add('custom-video__mute-btn--off')
    //             }).catch(function(error) {
    //                 console.log(error)
    //             });
    //         }
    //     })
        let flag3=true;
        btnPlay1.addEventListener('click', function() {
            
               //video paused
               if(flag3) {
                flag3=!flag3;
                btnPlay1.classList.add('active')
                //document.body.classList.add('videoPlaying')
                iframePlayer1.play().then(function() {
                    console.log('Playing entry video');
                }).catch(function(error) {
                   console.log(error)
                });
            }//video is playing
            else {
                flag3=!flag3;
                btnPlay1.classList.remove('active')
                iframePlayer1.pause()  
            }
        })
        
    // }
    // function initSliderMainVideo() {
    //     var iframe = document.querySelector('#customSliderVideo');
    //     window.iframePlayer = new Vimeo.Player(iframe);
    //     const btnPlay = document.querySelector('.playBtn-js');
    //     const overlay = document.querySelector('.overlay-js')
    //     var btnSound = document.querySelector('.soundBtn-js')
    //     let flag = true;
    //     let sound = false;
    //     btnSound.addEventListener('click', function(){
    //          if(sound) {
    //              sound=!sound;
    //              iframePlayer.setMuted(true).then(function() {
    //                  btnSound.classList.remove('custom-video__mute-btn--off')
    //                  btnSound.classList.add('custom-video__mute-btn--on')
    //              }).catch(function(error) {
    //                  console.log(error)
    //              });
    //          }
    //          else {
    //              sound=!sound;
    //              iframePlayer.setMuted(false).then(function() {
    //                 btnSound.classList.remove('custom-video__mute-btn--on')
    //                 btnSound.classList.add('custom-video__mute-btn--off')
    //             }).catch(function(error) {
    //                  console.log(error)
    //             });
    //          }
    //      })
    //     let firstClick = true;
    //     btnPlay.addEventListener('click', function(){
    //         if(firstClick) {
    //             overlay.remove();
    //             firstClick = false;
    //         }
    //         //check if video was paused by slider, if so change flag
    //         if(document.body.classList.contains('videoPaused')){
    //             flag=!flag;
    //         }
    //         //video paused
    //         if(flag) {
    //             flag=!flag;
    //             btnPlay.classList.add('active')
    //             document.body.classList.add('videoPlaying')
    //             iframePlayer.play().then(function() {
    //                 console.log('Paying mainslider video');
    //             }).catch(function(error) {
    //                console.log(error)
    //             });
    //         }//video is playing
    //         else {
    //             flag=!flag;
    //             btnPlay.classList.remove('active')
    //             iframePlayer.pause()
    //             document.body.classList.remove('videoPlaying')
    //         }
    //     })
      
    //     iframePlayer.on('ended', function() {
    //         mySwiper.autoplay.start();
    //         document.body.classList.remove('videoPlaying');
    //         btnPlay.classList.remove('active');
    //         flag=!flag;
    //         document.body.classList.add('videoEndedPlaying1');
    //         console.log('ended playing Main slider video, starting autoplay');
               
    //     })
    // }
    
    // function sliderEvents() {
    //     console.log(window.mySwiper);
    //     window.mySwiper.on('slideChange', function() {
    //         //4 sec video
    //         if(mySwiper.realIndex === videoIndex1) {
    //             //stop autoplay
    //             mySwiper.autoplay.stop();
    //             iframePlayer1.play();
    //             document.body.classList.add('videoPlaying');
    //             //allows to change the flag
    //             document.body.classList.add('videoPlayedFromCarousel')
    //             console.log(mySwiper.realIndex);
    //             //Wait 9 sec then check if user clicked the button to play the video
    //             // setTimeout(function() {
    //             //     //1. Player does not click the play button.Autoplay starts
    //             //     if((!document.body.classList.contains('videoPlaying')) && (!document.body.classList.contains('videoEndedPlaying'))) {
    //             //         mySwiper.autoplay.start();
    //             //         console.log('move on to autoplay in set timeout after 9 sec');
    //             //     } else {
    //             //         //Player clicked the button, control transfers to video player one
    //             //         console.log('user decided to play. Autoplay starts from the video player')
    //             //     }
    //             // }, 9000);
    //         }
    //        //main slider video
    //         if(mySwiper.realIndex === videoIndex) {
    //             mySwiper.autoplay.stop();
    //             console.log(mySwiper.realIndex);
    //             setTimeout(function() {
    //                  if((!document.body.classList.contains('videoPlaying')) && (!document.body.classList.contains('videoEndedPlaying1'))) {
    //                // if(!document.body.classList.contains('videoPlaying')) {
    //                     mySwiper.autoplay.start();
    //                     console.log('move on to autoplay');
    //                 } else {
    //                       //Player clicked the button, control transfers to video player one
    //                       console.log('user decided to play the main video')
    //                 }
    //             }, 9000)
    //         }

    //         if( mySwiper.realIndex ===  0 || mySwiper.realIndex ===  12) {
    //             mySwiper.autoplay.start();
    //             //stop video
    //             console.log(mySwiper.realIndex)
    //             if(document.body.classList.contains('videoPlaying')) {
    //                 iframePlayer.pause()
    //                 document.body.classList.remove('videoPlaying');
    //                 document.body.classList.add('videoPaused')
    //             } 
    //         }
    //         // if( mySwiper.realIndex ===  2) {
    //         //     //stop video
    //         //     console.log(mySwiper.realIndex)
    //         //     if(document.body.classList.contains('videoPlaying')) {
    //         //         mySwiper.autoplay.start();
    //         //         iframePlayer1.pause()
                    
    //         //     } 
    //         // }
    //     })
    // }
    function initSlider() {
        console.log('initializing slider');
        return new Swiper('.swiper-container', {
            autoplay: {
                delay: 9000,
            },
        
            loop: true,
            speed: 900,
            spaceBetween: 300,
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
            },
        }) 
    }

       
   //initVideoPlayer();
  // initLensVideoPlayer();
  // initSliderMainVideo();
   window.mySwiper = initSlider();   
    console.log(window.mySwiper);
    //sliderEvents();
});