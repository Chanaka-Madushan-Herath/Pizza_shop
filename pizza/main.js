var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000);
}


window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function show1(){
  document.getElementById('div1').style.display ='none';
  document.getElementById('div2').style.display ='none';
}
function show2(){
  document.getElementById('div1').style.display = 'block';
  document.getElementById('div2').style.display = 'block';

}
function show3(){
  document.getElementById('div3').style.display ='none';
}
function show4(){
  document.getElementById('div3').style.display = 'block';

}
function valuechange(){
var text1 = document.getElementById("text1"); 
var text2 = document.getElementById("text2"); 
var text3= document.getElementById("text3"); 
var Text1 = document.getElementById("Text1"); 
var Text2 = document.getElementById("Text2"); 
var Text3= document.getElementById("Text3"); 

var text1Value = text1.value;
var Text1Value = text1Value;
var text2Value = text2.value;
var Text2Value = text2Value;
var text3Value = text3.value;
var Text3Value = text3Value;

Text1.value = Text1Value; 
Text2.value = Text2Value; 
Text3.value = Text3Value; 
}

