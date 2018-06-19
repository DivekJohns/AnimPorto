 
 /// To bring a parallax effect slowly moveimage third party plugin

 
 (function(){

      var parallax = document.getElementsByClassName("bgimg-1"),
          speed = 1;
//to hide or show main nav div bar
      window.onscroll = function(){
 if ( document.documentElement.scrollTop > 20) {
      document.getElementById("mainbar").style.top = "0";
         document.getElementById("mainbar").style.transitionDuration=".4s";
    } else {
        x=document.getElementById("mainbar").style.top = "-50px";
             document.getElementById("mainbar").style.transitionDuration=".4s";
    }


        [].slice.call(parallax).forEach(function(el,i){

          var windowYOffset = window.pageYOffset,
              elBackgrounPos = "50% " + (windowYOffset * speed)*-1  + "px";

          el.style.backgroundPosition = elBackgrounPos;

        });
      };

    })();


    //handle button span click to scroll down
 /*   function openDiv(){
      document.getElementById('data').style.display= 'block';
      document.getElementById("data").scrollIntoView(100);
    }
    setTimeout(openDiv,2000);*/

    /*setTimeout(rotateicon,1000);
r=360;
    function rotateicon(){
     x= document.getElementsByTagName('li');


    for(m=0; m<x.length; m++){
       x[m].style.transform = "rotateY(360deg)"; 
            x[m].style.transitionDuration=".4s";
    if(r==360){
     x[m].style.transform = "rotate(360deg)"; 
    x=0;
  }
  else{
         x[m].style.transform = "rotate(0deg)"; 
        r=360;
  }
    }

    }*/

   var infiniteLoopAlternate = anime({
   targets: '#mySidenav .tet ',
  right: 5,
   direction: 'alternate',
  duration: function(el, i, l) {
    return 1000 + (i * 500);
  }
});


   var lianim = anime({
   targets: '#dockWrapper .list ',
  rotateY: 720,
   direction: 'alternate',
   loop:true,
   delay:3000,
  duration: function(el, i, l) {
    return 1000 + (i * 1000);
  }
});