var number = Math.floor(Math.random()*6)+1;
var randomImage = "dice" + number + ".png";
var randomSource = "images/" + randomImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomSource);

var number2 = Math.floor(Math.random()*6)+1;
var randomImage2 = "dice" +number2+ ".png";
var randomSource2 = "images/" +randomImage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", randomSource2);

if(number>number2){
  document.querySelector("h1").innerHTML="🚩 Player1 wins ";
}
else if(number< number2){
  document.querySelector("h1").innerHTML= "🚩 Player2 wins ";
}
else{
  document.querySelector("h1").innerHTML= "🚩 Its a draw! ";
}
