/* On Scroll Js */
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    var header= document.getElementById("header");
    header.classList.add('active');
  } else {
    var header= document.getElementById("header");
    header.classList.remove('active');
  }
}
/* On Scroll Js */

 
var owl = $('#banner-slider');
owl.owlCarousel({
     loop: false,
     dots: false,
     nav: false,
     navText: [
         ("<img src='images/arrow1.png' />"),
         ("<img src='images/arrow2.png' />")
     ],
     autoplay:true,
     center:false,
     margin: 0,
     responsive:{
         0:{
             items: 1,
             margin: 0,
         },
         600:{
             items: 1,
             margin: 0,
         },
         1000:{
             items: 1
         }
     }
 });

 //ham bar menu js

 function addmenu(){
  var item = document.getElementById('ham_menu');
   item.classList.add('active_menu');
 }
 function close_menu(){
   var item = document.getElementById('ham_menu');
   item.classList.remove('active_menu');
 }



 //video play 

 function videoPlay(){
   console.log('play');
   var imgItem = document.getElementById('video_image');
   imgItem.classList.add('img_display_none');

   var vdoItem = document.getElementById('video_play');
   vdoItem.classList.add('video_display');

   var vdoBx = document.getElementById('video_box');
   vdoBx.classList.add('vdo_banner_overlay');
 }

