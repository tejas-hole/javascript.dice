var num=Math.floor(Math.random()*6)+1;
var ranimagesource="images/dice"+num+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",ranimagesource);


var num2=Math.floor(Math.random()*6)+1;
var ranimagesource2="images/dice"+num2+".png";
var image12=document.querySelectorAll("img")[1];
image12.setAttribute("src",ranimagesource2);

if(num > num2){
   document.querySelector("h1").innerHTML="player 1 is winner";
    
}
else{
  document.querySelector("h1").innerHTML="player 2 is winner";  
}