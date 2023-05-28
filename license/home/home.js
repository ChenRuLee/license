// var mm = window.matchMedia("(max-width: 376px)");
// mm.addListener(resizeWidth);
// resizeWidth(mm);

// function resizeWidth(pMatchMedia) {
//   if (pMatchMedia.matches) {
//     // 小於376時執行的js

//     //  我的js

//     var slideIndex = 1;
//     showSlides(slideIndex);

//     // function plusSlides(n) {
//     //   showSlides(slideIndex += n);
//     // }

//     function currentSlide(n) {
//       showSlides(slideIndex = n);
//     }

//     function showSlides(n) {
//       var i;
//       var slides = document.getElementsByClassName("share_card");
//       var dots = document.getElementsByClassName("dot");
//       if (n > slides.length) { slideIndex = 1 }
//       if (n < 1) { slideIndex = slides.length }
//       for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//       }
//       for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//       }
//       slides[slideIndex - 1].style.display = "block";
//       dots[slideIndex - 1].className += " active";
//     }

//   } else {
//     //大於367時執行的js
//   }
// }



$(document).ready(function(){    //頁面一進來就會跑的程式
  detectionWidow();            //偵測螢幕的function，第42行

  $(window).resize(function() {   //當螢幕調整過尺寸（左右拖拉時），跑的程式
      detectionWidow();        //偵測螢幕的function，第40行
  });
});

var changeStr = document.getElementById("share_card");  //抓取html code class叫做share_card的那行

// js
var slideIndex = 1;
// showSlides(slideIndex);

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("share_card");
var dots = document.getElementsByClassName("dot");
if (n > slides.length) { slideIndex = 1 }
if (n < 1) { slideIndex = slides.length }
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex - 1].style.display = "block";
dots[slideIndex - 1].className += " active";
}

var originalStr = function(){         //原始的字串function


var detectionWidow = function(){      //偵測螢幕尺寸的function
  if(window.innerWidth <= 376){     //當螢幕尺寸<=376時，跑44行
       showSlides(slideIndex)       
    newStr();                     //新的字串function，12行
  }
  else{
      originalStr();                //原始的字串function，第39行
  }
}
}

