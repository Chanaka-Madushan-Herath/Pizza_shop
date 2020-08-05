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
  setTimeout(showSlides, 4000);
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

function validateForm() {
	var  alertmessage="";
  if(onpickup.checked && pickup.checked){
  var fields = ["Order","Coustomer_Name","Coustomer_Email","Coustomer_Contact_number","Billing_Adress","Billing_Suburd","Billing_Pcode"]

  var i, l = fields.length;
  var fieldname;
  for (i = 0; i < l; i++) {
    fieldname = fields[i];
  var x = document.forms["myForm"][fieldname].value;
  if (x == "" || x == null) {
    alertmessage+="\n"+"Please enter "+fieldname;
  }}}

  if ( delivery.checked) {
     var fields = ["Delivery_Adress","Delivery_Suburd","Delivery_Pcode"]

  var a, b = fields.length;
  var fieldname;
  for (a = 0; a < b; a++) {
    fieldname = fields[a];
  var c = document.forms["myForm"][fieldname].value;
  if (c == "" || c == null) {
     alertmessage+="\n"+"Please enter "+fieldname;
  }
  }
  
}
if (online.checked){
   var fields = ["card_name","cad_number","cvv",]

  var d, e = fields.length;
  var fieldname;
  for (d = 0; d < e; d++) {
    var fieldname = fields[d];
  var f = document.forms["myForm"][fieldname].value;
  if (f == "" || f == null) {
     alertmessage+="\n"+"Please enter "+fieldname;
  }
  }
}
if(alertmessage=="")
        {
            alertmessage=" Successfully orderd !!!!";
            alert(alertmessage);
            window.location.replace("index.html");
        }
        else
        {
            alert(alertmessage);
        }
}